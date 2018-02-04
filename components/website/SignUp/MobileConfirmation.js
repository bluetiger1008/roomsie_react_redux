import React, { Component } from 'react';
import { sortBy, get } from 'lodash';
import { MobilePhoneIcon, DownArrowIcon } from 'assets';
import { css } from 'styled-components';
import {
  Div,
  theme,
  Select,
  InputWithIcon,
  fireResize
} from 'components/common';
import { Text1, Regular, Slide } from './common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  sendVerificationPIN,
  closeModal,
  confirmVerificationPIN
} from 'actions';

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

const SelectBox = Div.extend`
  width: 264px;
  height: 45px;
  margin: 0 0 12px 0;
`;

const selectCountryCustomStyle = css`
  .Select-value,
  .Select-input > input,
  .Select-placeholder {
    padding: 0 0 0 20px !important;
  }

  .Select-arrow-zone {
    padding: 0 20px 0 0 !important;
  }
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

const countryOptions = [
  { label: '🇺🇸 United States (+1)', value: '🇺🇸 United States (+1)' }
];

class MobileConfirmation extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.sendVerificationPIN = this.sendVerificationPIN.bind(this);
    this.confirmVerificationPIN = this.confirmVerificationPIN.bind(this);
    this.didNotReceivePIN = this.didNotReceivePIN.bind(this);
    this.handleChange = this.handleChange.bind(this);
    const { auth: { user: { email } } } = this.props;
    this.state = {
      phoneNumber: '',
      verificationPIN: '',
      verificationPINSent: false,
      email,
      country: '🇺🇸 United States (+1)'
    };
  }

  close() {
    this.props.closeModal('signup');
  }

  sendVerificationPIN(e) {
    e.preventDefault();
    const { phoneNumber } = this.state;
    this.props.sendVerificationPIN(phoneNumber).then(() => {
      this.setState(() => ({
        verificationPINSent: true
      }));
    });
  }

  didNotReceivePIN() {
    this.setState(() => ({
      verificationPINSent: false
    }));
  }

  componentDidUpdate() {
    fireResize();
  }

  confirmVerificationPIN(e) {
    e.preventDefault();
    const { next } = this.props;
    const { verificationPIN } = this.state;
    this.props.confirmVerificationPIN(verificationPIN).then(next);
  }

  handleChange(id, e) {
    const value = e.target.value;
    this.setState(() => ({
      [id]: value
    }));
  }

  sendVerificationPIN_HTML() {
    const { next, auth } = this.props;
    const errorDetails = get(auth, 'phoneNumberError.details', {});
    let smsPlaceholder, smsError;
    if (errorDetails.sms) {
      smsPlaceholder = 'SMS';
      smsError = errorDetails.sms;
    }
    const { phoneNumber, country } = this.state;
    return (
      <Slide>
        <IconWrapper>
          <IconContainer>
            <MobilePhoneIcon color={'#fff'} />
          </IconContainer>
        </IconWrapper>
        <Text1>Confirm your phone number</Text1>
        <Regular>
          This is so your hosts or guests can reach you during a trip.
        </Regular>
        <form onSubmit={this.sendVerificationPIN}>
          <SelectBox>
            <Select
              name="select-country"
              placeholder={'Select Country'}
              arrowRenderer={() => <DownArrowIcon color={'#858585'} />}
              options={countryOptions}
              disabled={true}
              customStyle={selectCountryCustomStyle}
              value={country}
              onChange={this.handleCountryChange}
            />
          </SelectBox>
          <InputWithIcon
            placeholder={smsPlaceholder || 'Phone Number'}
            required
            error={smsError || errorDetails.number}
            customPadding={'0 20px'}
            value={phoneNumber}
            type="text"
            minLength={10}
            maxLength={10}
            pattern="[1-9]{1}[0-9]{9}"
            onChange={this.handleChange.bind(null, 'phoneNumber')}
          />
          <ConfirmButton type="submit">Send Verification PIN</ConfirmButton>
        </form>
        <DeclineButton onClick={next}>I'll do this later</DeclineButton>
      </Slide>
    );
  }

  verifyPIN_HTML() {
    const { verificationPIN } = this.state;
    const { auth } = this.props;
    const errorDetails = get(auth, 'pinError.details', {});
    return (
      <Slide>
        <Text1>Confirm Verification PIN</Text1>
        <form onSubmit={this.confirmVerificationPIN}>
          <InputWithIcon
            placeholder={'Verification PIN'}
            value={verificationPIN}
            required
            error={errorDetails.pin}
            customPadding={'0 20px'}
            type="text"
            minLength={4}
            maxLength={4}
            pattern="[0-9]{4}"
            onChange={this.handleChange.bind(null, 'verificationPIN')}
          />
          <ConfirmButton type="submit">Confirm Verification PIN</ConfirmButton>
        </form>
        <DeclineButton onClick={this.didNotReceivePIN}>
          I didn't receive the PIN
        </DeclineButton>
      </Slide>
    );
  }

  render() {
    const { verificationPINSent } = this.state;
    if (verificationPINSent) {
      return this.verifyPIN_HTML();
    }
    return this.sendVerificationPIN_HTML();
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  modalIsOpen: state.modals.signup
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { sendVerificationPIN, closeModal, confirmVerificationPIN },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MobileConfirmation);
