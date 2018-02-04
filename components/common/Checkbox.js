import React from 'react';
import { Div, theme } from 'components/common';

const CheckBoxContainer = Div.extend`
  align-items: center;
`;

const CheckBoxInput = Div.withComponent('input').extend`
  display: none;
`;

const CheckBoxLabel = Div.withComponent('label').extend`
  position: relative;
  align-items: center;
  &::after {
    content: '';
    position: absolute;
    display: none;
  }
  ${CheckBoxInput}:checked+&::after {
    display: block;
    left: 6px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: solid ${props => (props.color == 'green' ? '#81cfab' : '#666')};
    border-width: ${props =>
      props.color == 'green' ? '0 2px 2px 0' : '0 3px 3px 0'};
    transform: rotate(45deg);
   }
   ${props => props.labelStyle};
`;

const CheckBoxText = Div.extend`
  color: #424242;
  font-size: 16px;
  margin-left: 10px;
`;

const CheckBoxSpan = Div.withComponent('span').extend`
    width: 18px;
    height: 18px;
    text-indent: -999px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid ${props =>
      props.color == 'green' ? `${theme.colors.green}` : '#b2b2b2'};
    border-radius: 2px;
    background-size: 18px 18px;
`;

const CheckBox = ({ checked, color, onChange, id, label, labelStyle }) => (
  <CheckBoxContainer>
    <CheckBoxInput
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id={id}
    />
    <CheckBoxLabel htmlFor={id} labelStyle={labelStyle} color={color}>
      <CheckBoxSpan color={color} />
      <CheckBoxText>{label}</CheckBoxText>
    </CheckBoxLabel>
  </CheckBoxContainer>
);

export default CheckBox;
