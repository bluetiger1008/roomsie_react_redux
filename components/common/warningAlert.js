import React, { Component } from 'react';
import { Div } from 'components/common';

const Container = Div.extend`
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 1px solid #faf2cc;
  border-radius: 2px;
  background-color: #fcf8e3;
  color: #8a6d3b;
  width: 100%;
`;

class WarningAlert extends Component {
  render() {
    const warningMessage = this.props.text;
    return warningMessage ? <Container>{warningMessage}</Container> : null;
  }
}

export default WarningAlert;
