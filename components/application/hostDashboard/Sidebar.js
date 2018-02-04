import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Div from '../../common/Div';
import {
  DashboardIcon,
  MessagesIcon,
  MyGuestsIcon,
  MyBookingsIcon,
  MyPropertiesIcon,
  MyEventsIcon,
  PaymentCenterIcon
} from '../../../assets';
import theme from '../../common/theme';

const Text = Div.withComponent('span').extend`
  ${theme.sideNav};
  color: #2e3035;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

const LogoContainer = Div.withComponent('span').extend`
  margin-right: 15px;
`;

const Column = Div.extend`
  flex-direction: column;
  margin-top: 10px;
`;

const NavItem = Div.extend`
  margin: 15px 0;
  align-items: center;
`;

const NavSubItem = Div.extend`
  margin: 10px 0;
  align-items: center;
`;

const NavSubItems = styled.div`
  margin: 0 30px;
`;

const NavLink = ({ Logo, linkText, subLinks, onClick, selected }) => (
  <div>
    <NavItem onClick={onClick}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Text>{linkText}</Text>
    </NavItem>
    <NavSubItems>
      {subLinks &&
        subLinks.map(subLink => {
          return (
            <SubLink
              key={subLink.id}
              linkText={subLink.label}
              onClick={onClick}
            />
          );
        })}
    </NavSubItems>
  </div>
);

const SubLink = ({ linkText, onClick }) => (
  <NavSubItem onClick={onClick}>
    <Text>{linkText}</Text>
  </NavSubItem>
);

const navLinks = [
  [DashboardIcon, 'dashboard', 'dashboard'],
  [MessagesIcon, 'messages', 'messages'],
  [MyGuestsIcon, 'my guests', 'guests'],
  [MyBookingsIcon, 'my bookings', 'bookings'],
  [MyPropertiesIcon, 'my properties', 'properties'],
  [MyEventsIcon, 'my events', 'events'],
  [PaymentCenterIcon, 'payment center', 'payment_center']
];

const subLinks = {
  messages: [
    {
      id: 'inbox',
      label: 'inbox'
    },
    {
      id: 'sent',
      label: 'sent'
    },
    {
      id: 'trash',
      label: 'trash'
    },
    {
      id: 'compose',
      label: 'compose'
    }
  ]
};

class Sidebar extends Component {
  navSelect(navId) {}

  render() {
    return (
      <Column>
        {navLinks.map(nav => (
          <NavLink
            key={nav[1]}
            Logo={nav[0]}
            selected={nav[2] === 'bookings'}
            linkText={nav[1]}
            subLinks={subLinks[nav[2]]}
            onClick={() => this.navSelect(nav[2])}
          />
        ))}
      </Column>
    );
  }
}

export default withRouter(Sidebar);
