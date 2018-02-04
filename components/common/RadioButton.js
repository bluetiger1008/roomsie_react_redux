import React, { Component } from 'react';
import Div from './Div';

const RadioBoxContainer = Div.extend``;

const Radio = Div.withComponent('input').extend`
  &:checked,
  &:not(:checked) {
  	position: absolute;
  	left: -9999px;
  }
`;

const RadioLabel = Div.withComponent('label').extend`
  ${Radio}:checked + &,
  ${Radio}:not(:checked) + & {
  	position: relative;
  	padding-left: 28px;
  	cursor: pointer;
  	line-height: 20px;
  	display: inline-block;
  	color: #666;
  }
  ${Radio}:checked + &::before,
  ${Radio}:not(:checked) + &::before {
  	content: '';
  	position: absolute;
  	left: 0;
  	top: 0;width: 18px;
  	height: 18px;
  	border: 1px solid #c3c3c3;
  	border-radius: 100%;
  	background: #fff;
  }
  ${Radio}:checked + &::after,
  ${Radio}:not(:checked) + &::after {
  	content: '';
  	width: 12px;
  	height: 12px;
  	background: #454140;
  	position: absolute;
  	top: 4px;
  	left: 4px;
  	border-radius: 100%;
  	transition: all 0.2s ease;
  }
  ${Radio}:checked + &::after {
  	opacity: 1;
  	transform: scale(1);
  }
  ${Radio}:not(:checked) + &::after {
  	opacity: 0;
  	transform: scale(0);
  }
`;

class RadioButton extends Component {
  render() {
    const { id, name, value, label, checked, onChange } = this.props;

    return (
      <RadioBoxContainer>
        <Radio
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <RadioLabel htmlFor={id}>{label}</RadioLabel>
      </RadioBoxContainer>
    );
  }
}
export default RadioButton;
