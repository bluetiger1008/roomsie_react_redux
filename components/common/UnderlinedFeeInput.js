import React from 'react';
import { Div, theme, UnderlinedInput } from 'components/common';

const Container = Div.extend`
  position: relative;
  width: 100%;
  input {
    padding-left: 15px;
  }
`;

const Dollar = Div.extend`
  font-size: 18px;
  color: ${theme.colors.inputBlack};
  position: absolute;
`;

const UnderlinedFeeInput = props => (
  <Container>
    <Dollar>$</Dollar>
    <UnderlinedInput {...props} />
  </Container>
);

export default UnderlinedFeeInput;
