import React from 'react';
import { Div } from './';

const InputContainer = Div.extend`
  width: 100%;
  flex-direction: column;
`;

const Input = Div.withComponent('input').extend`
  border: none;
  border-bottom: ${props =>
    props.error ? '1px solid #ef585a' : '1px solid #d7d7d7'};
  padding-bottom: 10px;
  padding-top: 0;
  font-size: 18px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Error = Div.extend`
  color: #ef585a;
  margin-top: 7px;
  font-size: 13px;
`;

const UnderlinedInput = ({ label, error, ...props }) => (
  <InputContainer>
    <Input error={error} {...props} />
    {error && (
      <Error>
        {props.placeholder} {error}
      </Error>
    )}
  </InputContainer>
);

export default UnderlinedInput;
