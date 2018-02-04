import React from 'react';
import { Link } from 'react-router-dom';
import { RoomsieWebLogo } from 'assets';
import { Div, theme, Menu } from 'components/common';
import Login from 'components/website/LogIn';
import SignUp from 'components/website/SignUp';
import { connect } from 'react-redux';
import { css } from 'styled-components';
import { bindActionCreators } from 'redux';
import { openModal } from 'actions/modals';

const Container = Div.extend`
  position: absolute;
  width: 1280px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 14px 0;
  height: 76px;
`;

const loginListYourSpace = css`
  background-color: transparent;
  color: white;
`;

const ListYourSpace = Div.extend`
  ${props => (props.login ? theme.button2 : theme.button1)};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 15px 40px;
  border-radius: 30px;
  ${props => (props.login ? loginListYourSpace : null)};
`;

const Text = Div.extend`
  margin-right: 30px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

class Header extends React.Component {
  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
    this.makeSureTermsAreAccepted = this.makeSureTermsAreAccepted.bind(this);
  }

  openModal(modal) {
    this.props.openModal(modal);
  }

  componentDidMount() {
    this.makeSureTermsAreAccepted(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.makeSureTermsAreAccepted(nextProps);
  }

  makeSureTermsAreAccepted(props) {
    const { auth } = props;
    if (auth.authenticated && !auth.authorized) {
      this.openModal('signup');
    }
  }

  render() {
    const { auth } = this.props;
    const menuOptions = [
      {
        text: 'Dashboard',
        link: '/'
      },
      {
        text: 'Edit Profile',
        link: '/'
      },
      {
        text: 'Log Out',
        link: '/logout'
      }
    ];
    return (
      <Container>
        <Link to="/">
          <RoomsieWebLogo />
        </Link>
        <Div>
          {!auth.authorized ? (
            <Div>
              <Text onClick={this.openModal.bind(null, 'signup')}>Sign Up</Text>
              <Text onClick={this.openModal.bind(null, 'login')}>Login</Text>
              <Login />
              <SignUp />
            </Div>
          ) : null}
          <Menu color="white" options={menuOptions} />
          <Link to="/list-space/property-basics">
            <ListYourSpace login={true}>List Your Space</ListYourSpace>
          </Link>
        </Div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ openModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
