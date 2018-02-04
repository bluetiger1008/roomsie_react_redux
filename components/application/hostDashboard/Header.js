import React, { Component } from 'react';
import { DownArrowIcon, NotificationIcon, RoomsieLogo } from '../../../assets';
import { Div, BadgeCount, theme, dropShadow } from '../../common';

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

const Logo = Div.extend`
  background-color: red;
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

const ProfilePictureContainer = Div.extend`
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  border-radius: 50%;
  background-color: red;
  margin-right: 10px;
`;

const Name = Div.extend`
  font-size: 13px;
  font-weight: 400;
  margin-right: 10px;
`;

const ProfileInfoContainer = Div.extend`
  align-items: center;
  justify-content: space-around;
  margin-right: 50px;
`;

const BadgeContainer = Div.extend`
  position: absolute;
  left: 10px;
  bottom: 45%;
`;

const Img = Div.withComponent('img').extend`
`;

const Notification = ProfileInfoContainer.extend`
  position: relative;
`;

class Header extends Component {
  render() {
    return (
      <OuterContainer>
        <Container>
          <Logo>
            <Img src={RoomsieLogo} alt={'Roomsie Logo'} />
          </Logo>
          <Div>
            <ProfileInfoContainer>
              <ProfilePictureContainer />
              <Name>John Anderson</Name>
              <DownArrowIcon />
            </ProfileInfoContainer>
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
