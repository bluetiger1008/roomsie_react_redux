import React, { Component } from 'react';
import { NotificationIcon, RoomsieLogo } from 'assets';
import { Div, BadgeCount, theme, dropShadow, Menu } from './';
import { Link } from 'react-router-dom';

const OuterContainer = Div.extend`
  background-color: white;
  justify-content: center;
  height: 76px;
  width: 100%;
  position: relative;
  ${dropShadow(124, 0, 0, 13, 0.1, '#000')};
`;

const Container = Div.extend`
  background: white;
  position: absolute;
  width: 1280px;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  height: 76px;
`;

const ListYourSpace = Div.extend`
  ${theme.button2};
  ${theme.h5};
  cursor: pointer;
  margin: 14px 0;
  align-items: center;
  justify-content: center;
  padding: 15px 40px;
  border-radius: 30px;
`;

const Notification = Div.extend`
  position: relative;
  align-items: center;
  justify-content: space-around;
  margin: 0 50px 0 25px;
`;

const BadgeContainer = Div.extend`
  position: absolute;
  left: 10px;
  bottom: 45%;
`;

const Img = Div.withComponent('img').extend`
`;

// This component is going to change when we have notifications built
class Header extends Component {
  render() {
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
      <OuterContainer>
        <Container>
          <Link to="/">
            <Img src={RoomsieLogo} alt={'Roomsie Logo'} />
          </Link>
          <Div>
            <Menu color="black" options={menuOptions} />
            <Notification>
              <NotificationIcon color={theme.colors.darkGrey} />
              <BadgeContainer>
                <BadgeCount count={6} />
              </BadgeContainer>
            </Notification>
            <ListYourSpace>List Your Space</ListYourSpace>
          </Div>
        </Container>
      </OuterContainer>
    );
  }
}

export default Header;
