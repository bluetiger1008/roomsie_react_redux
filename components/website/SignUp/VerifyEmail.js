import React, { Component } from 'react';
import { EmailIcon2 } from 'assets';
import { get } from 'lodash';
import { Div, theme, InputWithIcon, fireResize } from 'components/common';
import { Text1, Regular, Slide } from './common';
import { sendVerificationMail, updateEmail, closeModal } from 'actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const IconWrapper = Div.extend`
  width: 86px;
  height: 86px;
  background: #494949;
  position: relative;
  border-radius: 100%;
`;

const IconContainer = Div.extend`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

const ConfirmButton = Div.withComponent('button').extend`
  ${theme.button1};
  outline:none;
  height: 45px;
  width: 264px;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  margin: 12px 0 20px 0;
`;

const DeclineButton = Div.withComponent('button').extend`
  outline: none;
  height: 45px;
  width: 264px;
  font-size: 16px;
  font-weight: 400;
  color: #4d4d4d;
  border: none;
  align-items: center;
  justify-content: center;
`;

const SwitchDisable = Div.extend`
  color: #3a8fd2;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  justify-content: center;
  margin-bottom: 20px;
`;

class MobileConfirmation extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.switchDisable = this.switchDisable.bind(this);
    this.sendMail = this.sendMail.bind(this);
    const { auth: { user: { email } } } = this.props;
    this.state = {
      email,
      disabled: true
    };
  }

  close() {
    this.props.closeModal('signup');
  }

  handleChange(id, e) {
    const value = e.target.value;
    this.setState(() => ({
      [id]: value
    }));
  }

  switchDisable() {
    this.setState(({ disabled }) => ({
      disabled: !disabled
    }));
  }

  sendMail(e) {
    e.preventDefault();
    const { email, disabled } = this.state;
    const { updateEmail, sendVerificationMail } = this.props;
    if (disabled) {
      return sendVerificationMail();
    }
    return updateEmail(email).then(this.switchDisable);
  }

  componentDidUpdate() {
    fireResize();
  }

  render() {
    const { email, disabled } = this.state;
    const { auth } = this.props;
    const errorDetails = get(auth, 'emailError.details', {});
    return (
      <Slide>
        <IconWrapper>
          <IconContainer>
            <EmailIcon2 scale={2.3} color={'#fff'} />
          </IconContainer>
        </IconWrapper>
        <Text1>Check your email</Text1>
        <Regular>
          Tap the link in the email we sent you. Confirming your email address
          helps us send you trip information.
        </Regular>
        <form onSubmit={this.sendMail}>
          <InputWithIcon
            placeholder={'Email'}
            required
            error={errorDetails.email}
            disabled={disabled}
            customPadding={'0 20px'}
            value={email}
            type="email"
            onChange={this.handleChange.bind(null, 'email')}
          />

          <ConfirmButton type="submit">
            {disabled ? 'Resend Email' : 'Update Email'}
          </ConfirmButton>
          {disabled ? (
            <SwitchDisable onClick={this.switchDisable}>
              Change email address
            </SwitchDisable>
          ) : null}
        </form>
        <DeclineButton onClick={this.close}>I'll do this later</DeclineButton>
      </Slide>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { sendVerificationMail, updateEmail, closeModal },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MobileConfirmation);
