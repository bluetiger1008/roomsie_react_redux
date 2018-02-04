import React from 'react';
import { Div, Column } from 'components/common';

const OutsideContainer = Column.extend`
  flex: 1;
`;

const InputIcon = Div.extend`
  position: absolute;
  top: 0;
  bottom: 0;
  align-items: center;
  left: 15px;
`;

const InputContainer = Div.extend`
  position: relative;
  width: 100%;
  padding: 8px 0;
`;

const Input = Div.withComponent('input').extend`
  height: 47px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #858585;
  outline: none;
  border: 1px solid ${props => (props.error ? '#ce3849' : '#b2b2b2')};
  border-radius: 2px;
  padding: ${props => props.customPadding || '0 50px'};
  &:disabled {
    background: #e3e2e2;
  }
`;

const Error = Div.extend`
  color: #ce3849;
  padding: 0 0 8px 0;
  font-size: 14px;
`;

const InputWithIcon = ({ placeholder, icon, ...props }) => (
  <OutsideContainer>
    <InputContainer>
      {icon ? <InputIcon>{icon}</InputIcon> : null}
      <Input placeholder={placeholder} {...props} />
    </InputContainer>
    {props.error ? (
      <Error>
        {placeholder} {props.error}
      </Error>
    ) : null}
  </OutsideContainer>
);

export default InputWithIcon;
