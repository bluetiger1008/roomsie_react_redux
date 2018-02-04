import React, { Component } from 'react';
import Modal from 'react-modal';
import { get } from 'lodash';
import {
  Div,
  Column,
  theme,
  Checkbox,
  InputWithIcon,
  ErrorAlert
} from 'components/common';
import { FacebookIcon2, GoogleIcon, EmailIcon2, PasswordIcon } from 'assets';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, loginWithOauth, verify } from 'actions';
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
  padding: 70px;
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
  margin-top: 30px;
  padding: 0 0 12px 0;
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
  color: #494949;
`;

const Form = Column.withComponent('form').extend`
  width: 100%;
`;
const ForgotPassword = Div.extend`
  color: #3a8fd2;
  font-size: 14px;
  cursor: pointer;
`;

const ExtraOptionsContainer = Div.extend`
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      rememberMe: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount() {
    this.props.verify();
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

  handleLogin(e) {
    e.preventDefault();
    const { loginUser } = this.props;
    const { email, password, rememberMe } = this.state;
    loginUser({ email, password, rememberMe });
  }

  close() {
    this.props.closeModal('login');
  }

  render() {
    const { isModalOpen, auth, loginWithOauth } = this.props;
    const loginError = get(auth, 'loginError.description', null);
    const { email, password, rememberMe } = this.state;
    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={this.close}
        style={customStyles}
      >
        <Container>
          <Order>Login to Continue</Order>
          <SocialContainer>
            <Social
              color={'#546CA8'}
              onClick={loginWithOauth.bind(null, 'facebook')}
            >
              <SocialText>Login with Facebook</SocialText>
              <FacebookIcon2 color={'white'} />
            </Social>
            <Social
              color={'#E66244'}
              onClick={loginWithOauth.bind(null, 'google')}
            >
              <SocialText>Login with Google</SocialText>
              <GoogleIcon color={'white'} />
            </Social>
          </SocialContainer>
          <ORContainer>
            <ORLine />
            <ORText>OR</ORText>
            <ORLine />
          </ORContainer>
          <ErrorAlert text={loginError} />
          <Order2>Login with Email</Order2>
          <Form onSubmit={this.handleLogin}>
            <InputWithIcon
              icon={<EmailIcon2 color={'#969696'} />}
              value={email}
              type={'email'}
              required
              placeholder={'Email Address'}
              onChange={this.handleChange.bind(null, 'email')}
            />
            <InputWithIcon
              icon={<PasswordIcon color={'#969696'} />}
              type={'password'}
              required
              value={password}
              placeholder={'Password'}
              onChange={this.handleChange.bind(null, 'password')}
            />
            <ExtraOptionsContainer>
              <Div>
                <Checkbox
                  id={'rememberMe'}
                  checked={rememberMe}
                  label="Remember me"
                  onChange={this.handleCheck.bind(null, 'rememberMe')}
                />
              </Div>
              <ForgotPassword>Forgot password?</ForgotPassword>
            </ExtraOptionsContainer>
            <LoginButton type="submit">Login Now</LoginButton>
          </Form>
          <Bait>
            Don’t have an account?
            <SignUpLink>Sign Up</SignUpLink>
          </Bait>
          <CloseButton onClick={this.close}>+</CloseButton>
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isModalOpen: state.modals.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { loginUser, closeModal, verify, loginWithOauth },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
