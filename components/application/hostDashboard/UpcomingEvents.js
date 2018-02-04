import React, { Component } from 'react';
import { Div, theme } from '../../common';
import { CalendarIcon, MenuIcon, RightArrowIcon } from '../../../assets';
import Calendar from './Calendar';

const Container = Div.extend`
  background-color: white;
  ${theme.shadow};
  align-items: flex-start;
  width: 367px;
  padding: 30px;
  margin: 10px 10px 10px 0;
  flex-direction: column;
`;

const TextContainer = Div.extend`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 10px 20px 10px;
`;

const Header = Div.extend`
  width: 100%;
  justify-content: space-between;
`;

const MenuIconContainer = Div.withComponent('span').extend`
  padding: 10px;
  background-color: ${theme.colors.background};
  margin-right: 10px;
`;

const Middle = Div.extend`
  align-items: center;
  justify-content: center;
`;

const AlignStart = Div.extend`
  align-self: flex-start;
`;

const LinkContainer = Div.extend`
  margin-top: 0px;
  align-items: center;
  align-self: flex-end;
`;

const Link = Div.extend`
  ${theme.link};
  ${LinkContainer}:hover & {
    color: black;
  }
  margin-right: 10px;
`;

class UpcomingEvents extends Component {
  render() {
    return (
      <Container>
        <Header>
          <TextContainer>Upcoming Events</TextContainer>
          <AlignStart>
            <MenuIconContainer>
              <MenuIcon />
            </MenuIconContainer>
            <Middle>
              <CalendarIcon color={theme.colors.grey} />
            </Middle>
          </AlignStart>
        </Header>
        <Calendar />
        <LinkContainer>
          <Link>VIEW ALL EVENTS</Link>
          <RightArrowIcon color={theme.colors.grey} />
        </LinkContainer>
      </Container>
    );
  }
}

export default UpcomingEvents;
