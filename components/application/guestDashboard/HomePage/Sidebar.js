import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';

import { SpaceBetween, Div, theme, BadgeCount } from 'components/common/index';
import NewMessage from '../Messages/Common/NewMessage';
import ComposeInput from '../Messages/Common/ComposeInput';

import {
  DashboardIcon,
  MessagesIcon,
  MyStaysIcon,
  MyRoomiesIcon,
  MyEventsIcon,
  MyGroupsIcon,
  PaymentCenterIcon,
  MinimizeIcon,
  CloseIcon
} from '../../../../assets/index';

const customStyles = {
  content: {
    top: 'auto',
    left: 'auto',
    right: '9px',
    bottom: '0',
    width: '678px',
    height: 'auto',
    padding: '0'
  }
};

const Text = Div.withComponent('span').extend`
  ${theme.sideNav};
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
  margin: 0 40px;
`;

const ComposeButton = styled.div`
  ${theme.button1};
  cursor: pointer;
  margin: 16px 0;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  padding: 14px 25px;
  border-radius: 30px;
  color: white;
`;

const BadgeContainer = Div.extend`
  margin: 0 10px;
`;

const ModalHeader = styled.div`
  padding: 20px;
  background-color: #454141;
`;

const Title = styled.div`
  font-size: 22px;
  color: white;
  font-weight: bold;
`;

const FlexEnd = Div.extend`
  align-items: flex-end;
`;

const Icon = styled.div`
  margin-left: 16px;
  cursor: pointer;
`;

const navLinks = [
  [DashboardIcon, 'dashboard', 'dashboard'],
  [MessagesIcon, 'messages', 'messages'],
  [MyStaysIcon, 'my stays', 'stays'],
  [MyRoomiesIcon, 'my roomies', 'roomies'],
  [MyEventsIcon, 'my events', 'events'],
  [MyGroupsIcon, 'my groups', 'groups'],
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
      label: 'Compose'
    }
  ]
};

const badgeCount = {
  messages: 6
};

const NavLink = ({ Logo, linkText, subLinks, badgeCount, onClick }) => (
  <div>
    <NavItem onClick={onClick}>
      <LogoContainer>
        <Logo color={theme.colors.grey} />
      </LogoContainer>
      <Text>{linkText}</Text>
      {badgeCount && (
        <BadgeContainer>
          <BadgeCount count={6} />
        </BadgeContainer>
      )}
    </NavItem>
  </div>
);

const SubLink = ({ linkText, onClick }) => (
  <NavSubItem onClick={onClick}>
    <Text>{linkText}</Text>
  </NavSubItem>
);

const ComposeLink = ({ linkText, onClick }) => (
  <ComposeButton onClick={onClick}>{linkText}</ComposeButton>
);

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  navSelect(navId) {}

  render() {
    return (
      <div>
        <Column>
          {navLinks.map(nav => (
            <div key={nav[1]}>
              <NavLink
                key={nav[1]}
                Logo={nav[0]}
                linkText={nav[1]}
                badgeCount={badgeCount[nav[2]]}
                onClick={() => this.navSelect(nav[2])}
              />
              <NavSubItems>
                {subLinks[nav[2]] &&
                  subLinks[nav[2]].map(subLink => {
                    if (subLink.id === 'compose') {
                      return (
                        <ComposeLink
                          key={subLink.id}
                          linkText={subLink.label}
                          onClick={() => this.openModal()}
                        />
                      );
                    } else {
                      return (
                        <SubLink key={subLink.id} linkText={subLink.label} />
                      );
                    }
                  })}
              </NavSubItems>
            </div>
          ))}
        </Column>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          overlayClassName={{
            base: 'modalOverlay',
            afterOpen: 'myOverlayClass_after-open',
            beforeClose: 'myOverlayClass_before-close'
          }}
          contentLabel="New Message"
        >
          <ModalHeader>
            <SpaceBetween>
              <Title>NewMessage</Title>
              <FlexEnd>
                <Icon onClick={this.closeModal}>
                  <MinimizeIcon color={'#7f7979'} />
                </Icon>
                <Icon onClick={this.closeModal}>
                  <CloseIcon color={'#7f7979'} />
                </Icon>
              </FlexEnd>
            </SpaceBetween>
          </ModalHeader>
          <ComposeInput placeholder={'To'} />
          <ComposeInput placeholder={'Subject'} />
          <NewMessage />
        </Modal>
      </div>
    );
  }
}

export default withRouter(Sidebar);
