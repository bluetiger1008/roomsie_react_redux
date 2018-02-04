import React, { Component } from 'react';
import Div from 'components/common/Div';
import theme from 'components/common/theme';
import { CalendarIcon, MenuIcon, RightArrowIcon } from 'assets/index';

const Container = Div.extend`
  background-color: white;
  ${theme.shadow};
  align-items: flex-start;
  width: 367px;
  padding: 30px;
  margin: 10px 10px 10px 0;
  flex-direction: column;
`;

const EventsContainer = Div.extend`
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const EventContainer = Div.extend`
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.grey};
`;

const EventInfo = Div.withComponent('span').extend`
  font-size: 16px;
  font-weight: 400;
  padding-left: 20px;
  border-left: 1px solid ${theme.colors.grey};
`;

const DateContainer = Div.extend`
  font-size: 12px;
  font-weight: 600;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.grey};
  flex-direction: column;
`;

const Month = Div.withComponent('span').extend`
  text-transform: uppercase;
`;

const Date = Div.withComponent('span').extend`
  font-size: 20px;
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
  margin-top: 25px;
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

const Event = () => (
  <EventContainer>
    <DateContainer>
      <Month>june</Month>
      <Date>15</Date>
    </DateContainer>
    <EventInfo>NY Charity Golf Scramble Sponsored by Buick</EventInfo>
  </EventContainer>
);

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
        <EventsContainer>
          <Event />
          <Event />
          <Event />
        </EventsContainer>
        <LinkContainer>
          <Link>VIEW ALL EVENTS</Link>
          <RightArrowIcon color={theme.colors.grey} />
        </LinkContainer>
      </Container>
    );
  }
}

export default UpcomingEvents;
