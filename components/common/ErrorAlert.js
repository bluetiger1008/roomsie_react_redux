import React, { Component } from 'react';
import { Div } from 'components/common';
import styled from 'styled-components';
import { CloseIcon2 } from 'assets/icons';

const Container = Div.extend`
  position: relative;
  padding: 20px;
  margin-top: 20px;
  background-color: #bf4953;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Info = styled.span`
  display: inline-block;
  border-radius: 50%;
  background: white;
  width: 25px;
  height: 25px;
  text-align: center;
  color: #bf4953;
  padding-top: 1px;
  margin-right: 20px;
`;

const CloseLink = styled.a`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;

  svg {
    pointer-events: none;
  }
`;

class ErrorAlert extends Component {
  constructor() {
    super();

    this.state = {
      visible: true
    };

    this.close = this.close.bind(this);
  }

  close() {
    this.setState(() => {
      return { visible: false };
    });
  }

  render() {
    const errorMessage = this.props.text;
    const { visible } = this.state;
    return errorMessage && visible ? (
      <Container>
        <CloseLink onClick={this.close}>
          <CloseIcon2 color="white" />
        </CloseLink>
        <Info>i</Info>
        {errorMessage}
      </Container>
    ) : null;
  }
}

export default ErrorAlert;
