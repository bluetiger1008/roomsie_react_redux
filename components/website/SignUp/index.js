import React, { Component } from 'react';
import Modal from 'react-modal';
import { get, forIn } from 'lodash';
import MonthDayYearSelect from './MonthDayYearSelect';
import {
  Div,
  Column,
  theme,
  Checkbox,
  InputWithIcon,
  WarningAlert
} from 'components/common';
import WelcomeWizard from './WelcomeWizard';
import {
  FacebookIcon2,
  GoogleIcon,
  EmailIcon2,
  PasswordIcon,
  UserIcon
} from 'assets';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser, registerWithOauth } from 'actions';
import { closeModal } from 'actions/modals';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    transform: 'translate(-50%, -50%)'
  }
};

const Container = Column.extend`
  background: white;
  width: 685px;
  justify-content: center;
  align-items: center;
  padding: 60px;
  position: relative;
`;

const Order = Div.extend`
  color: #1e376f;
  font-size: 40px;
  font-weight: 300;
`;

const SocialContainer = Div.extend`
  justify-content: space-between;
  width: 100%;
  padding: 38px 0;
`;

const Social = Div.extend`
  width: 265px;
  cursor: pointer;
  height: 45px;
  border-radius: 45px;
  padding: 0 25px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.color};
`;

const SocialText = Div.extend`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

const ORContainer = Div.extend`
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;

const ORLine = Div.extend`
  height: 1px;
  background-color: #e8ebec;
  width: 100%;
`;

const ORText = Div.extend`
  font-size: 16px;
  margin: 0 10px;
  color: #454140;
`;

const Order2 = Div.extend`
  padding: 0 0 12px 0;
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
  color: #494949;
`;

const Form = Column.withComponent('form').extend`
  width: 100%;
`;

const BirthdayContainer = Column.extend`
  margin: 20px 0 30px 0;
`;

const BirthdayText = Div.extend`
  color: ${props => props.color || 'black'};
  font-size: 16px;
`;

const LoginButton = Div.withComponent('button').extend`
  ${theme.button1};
  width: 100%;
  margin: 30px 0 40px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 45px;
  border-radius: 45px;
`;

const Bait = Div.extend`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60px;
  align-items: center;
  justify-content: center;
  color: #4d4d4d;
  font-weight: 600;
  font-size: 16px;
  background-color: #f3f5f6;
  border-top: 1px solid #e8ebec;
`;

const SignUpLink = Div.extend`
  color: #3a8fd2;
  cursor: pointer;
  margin-left: 5px;
`;

const CloseButton = Div.extend`
  color: #404040;
  position: absolute;
  font-size: 33px;
  font-weight: 300;
  transform: rotate(45deg);
  top: 20px;
  right: 25px;
  cursor: pointer;
  line-height: 20px;
`;

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      oauthToken: '',
      password: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      marketing: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.close = this.close.bind(this);
  }

  handleChange(id, e) {
    const value = e.target.value;
    this.setState(() => ({
      [id]: value
    }));
  }

  handleCheck(id, e) {
    const value = e.target.checked;
    this.setState(() => ({
      [id]: value
    }));
  }

  handleDateChange(id, value) {
    this.setState(() => ({
      [id]: value
    }));
  }

  handleRegister(e) {
    e.preventDefault();
    const {
      email,
      password,
      firstName,
      lastName,
      birthDate,
      marketing
    } = this.state;
    this.props.registerUser({
      email,
      password,
      marketing,
      firstName,
      lastName,
      birthDate
    });
  }

  componentWillReceiveProps(nextProps) {
    forIn(nextProps.auth.user, (value, key) => {
      this.setState(() => ({
        [key]: value
      }));
    });
  }

  close() {
    this.props.closeModal('signup');
  }

  render() {
    const { isModalOpen, registerWithOauth, auth, provideInfo } = this.props;
    const errorDetails = get(auth, 'signupError.details', {});
    const {
      email,
      password,
      marketing,
      firstName,
      lastName,
      birthDate,
      oauthToken
    } = this.state;
    if ((auth.authenticated && !auth.authorized) || provideInfo) {
      return <WelcomeWizard />;
    }
    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={this.close}
        style={customStyles}
      >
        <Container>
          <Order>Sign Up with Roomsie</Order>
          <SocialContainer>
            <Social
              color={'#546CA8'}
              onClick={registerWithOauth.bind(null, 'facebook')}
            >
              <SocialText>Sign up with Facebook</SocialText>
              <FacebookIcon2 color={'white'} />
            </Social>
            <Social
              color={'#E66244'}
              onClick={registerWithOauth.bind(null, 'google')}
            >
              <SocialText>Sign up with Google</SocialText>
              <GoogleIcon color={'white'} />
            </Social>
          </SocialContainer>
          <ORContainer>
            <ORLine />
            <ORText>OR</ORText>
            <ORLine />
          </ORContainer>
          {auth.warning ? <WarningAlert text={auth.warning} /> : null}
          <Order2>Sign up with Email</Order2>
          <Form onSubmit={this.handleRegister}>
            <InputWithIcon
              icon={<EmailIcon2 color={'#969696'} />}
              value={email}
              type={'email'}
              required
              error={errorDetails.email}
              placeholder={'Email Address'}
              onChange={this.handleChange.bind(null, 'email')}
            />
            <Div>
              <InputWithIcon
                icon={<UserIcon color={'#969696'} />}
                style={{ marginRight: 10 }}
                value={firstName}
                error={errorDetails.firstName}
                placeholder={'First Name'}
                onChange={this.handleChange.bind(null, 'firstName')}
              />
              <InputWithIcon
                icon={<UserIcon color={'#969696'} />}
                value={lastName}
                error={errorDetails.lastName}
                placeholder={'Last Name'}
                onChange={this.handleChange.bind(null, 'lastName')}
              />
            </Div>
            {oauthToken ? null : (
              <InputWithIcon
                icon={<PasswordIcon color={'#969696'} />}
                type={'password'}
                required
                error={errorDetails.password}
                value={password}
                placeholder={'Password'}
                onChange={this.handleChange.bind(null, 'password')}
              />
            )}
            <BirthdayContainer>
              <BirthdayText>Enter your Birthday</BirthdayText>
              <MonthDayYearSelect
                onChange={this.handleDateChange.bind(null, 'birthDate')}
                error={errorDetails.birthDate}
                value={birthDate}
                placeholder={'Birth Date'}
              />
              <BirthdayText color={'#858585'}>
                To sign up, you must be 18 or older. Other people won’t see your
                birthday.
              </BirthdayText>
            </BirthdayContainer>
            <Div>
              <Checkbox
                id={'marketing'}
                checked={marketing}
                label="I’d like to receive marketing and policy communications from Roomsie."
                onChange={this.handleCheck.bind(null, 'marketing')}
              />
            </Div>
            <LoginButton type="submit">Sign Up Now</LoginButton>
          </Form>
          <Bait>
            Already have a Roomsie account?
            <SignUpLink>Log in</SignUpLink>
          </Bait>
          <CloseButton onClick={this.close}>+</CloseButton>
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isModalOpen: state.modals.signup,
  provideInfo: state.modals.provideInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ registerUser, registerWithOauth, closeModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
