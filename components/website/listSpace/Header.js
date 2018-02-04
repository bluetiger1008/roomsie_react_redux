import React, { Component } from 'react';
import { DownArrowIcon, NotificationIcon, RoomsieLogo } from 'assets';
import { Div, BadgeCount, theme, dropShadow } from 'components/common';

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

const Notification = ProfileInfoContainer.extend`
  position: relative;
`;

class Header extends Component {
  render() {
    return (
      <OuterContainer>
        <Container>
          <Logo>
            <img src={RoomsieLogo} alt={'Roomsie Logo'} />
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
          </Div>
        </Container>
      </OuterContainer>
    );
  }
}

export default Header;
