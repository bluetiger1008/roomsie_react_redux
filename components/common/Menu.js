import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DownArrowIcon, Avatar } from 'assets';
import { Div, Column, dropShadow } from './';

const ProfilePictureContainer = Div.withComponent('img').extend`
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MenuContainer = Div.extend`
  position: relative;
`;

const Name = Div.extend`
  font-size: 15px;
  font-weight: 400;
  margin-right: 10px;
  color: ${props => props.color || 'black'};
`;

const ProfileInfoContainer = Div.extend`
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  margin-right: 25px;
`;

const DropDownContainer = Column.extend`
  width: 270px;
  position: absolute;
  top: 60px;
  left: 33px;
  border-radius: 2px;
  align-items: center;
  background-color: white;
  padding: 20px 35px;
  border: 1px solid #dddddd;
  ${dropShadow(124, 1, 0, 13, 0.18, '#000')};
`;

const ArrowUp = Div.extend`
  position: absolute;
  top: -8px;
  background: white;
  border-left: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
`;

const IconContainer = Div.extend`
  margin-top: 4px;
`;

const Option = Div.extend`
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  color: #494949;
  padding: 15px 0;
  border-bottom: ${props => (props.last ? 'none' : '1px solid #e8e8e8')};
`;

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.switchVisibility = this.switchVisibility.bind(this);
  }

  switchVisibility() {
    this.setState(({ visible }) => ({
      visible: !visible
    }));
  }

  render() {
    const { color, options, auth } = this.props;
    if (!auth.authorized) return null;
    const { user } = auth;
    const { visible } = this.state;
    const optionsLength = options.length;
    const optionsHTML = options.map((option, i) => (
      <Link style={{ width: '100%' }} to={option.link} key={option.text}>
        <Option last={optionsLength === i + 1}>{option.text}</Option>
      </Link>
    ));
    return (
      <MenuContainer>
        <ProfileInfoContainer onClick={this.switchVisibility}>
          <ProfilePictureContainer src={Avatar} />
          <Name color={color}>
            {`${user.firstName || ''} ${user.lastName || ''}`.trim()}
          </Name>
          <IconContainer>
            <DownArrowIcon color={color} />
          </IconContainer>
        </ProfileInfoContainer>
        {visible ? (
          <DropDownContainer>
            <ArrowUp />
            {optionsHTML}
          </DropDownContainer>
        ) : null}
      </MenuContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Menu);
