import React from 'react';
import { Div, theme } from 'components/common';

const InputContainer = Div.extend`
  position: relative;
  width: ${props => props.width};
`;

const Input = Div.withComponent('input').extend`
  width: 129px;
  height: ${props => props.height};
  border: none;
  border-bottom: 1px solid #d7d7d7;
  outline: none;
  padding-left: ${props => (props.amountInput ? '25px' : '15px')};
  color: ${theme.colors.cardBoxDarkGrey};
  font-size: ${props => (props.fontSize ? props.fontSize : '16px')};
`;

const Prefix = Div.extend`
  font-size: ${props => props.fontSize};
  color: ${theme.colors.inputBlack};
  position: absolute;
  left: ${props => (props.amountInput ? '13px' : '0')};
  line-height: ${props => props.height};
`;

const FeeInput = ({ amountInput, height, width, fontSize, ...props }) => (
  <InputContainer width={width}>
    <Prefix amountInput={amountInput} height={height} fontSize={fontSize}>
      $
    </Prefix>
    <Input
      {...props}
      amountInput={amountInput}
      height={height}
      fontSize={fontSize}
    />
  </InputContainer>
);

export default FeeInput;
