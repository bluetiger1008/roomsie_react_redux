import React from 'react';
import Div from './Div';
import RadioButton from './RadioButton';
import styled from 'styled-components';

const Container = Div.extend`
  flex-direction: column;
  border: 1px solid
    ${props =>
      props.error ? '#ef585a' : props.checked ? '#48b885' : '#d7d7d7'};
  background-color: ${props => (props.checked ? '#f6fffb' : '#fff')};
  border-radius: 2px;
  flex: 1;
  &:hover {
    border: 1px solid #48b885;
    background-color: #f6fffb;
  }
`;

const Label = styled.label`
  padding: 25px;
  cursor: pointer;
`;

const OptionTitle = Div.extend`
  font-size: 18px;
  color: #1d1d1d;
`;

const OptionText = Div.extend`
  font-size: 14px;
  color: #454140;
  margin-top: 12px;
`;

const RadioButtonBox = ({ checked, error, description, ...props }) => {
  return (
    <Container checked={checked} error={error}>
      <Label>
        <OptionTitle>
          <RadioButton {...props} checked={checked} />
        </OptionTitle>
        <OptionText>{description}</OptionText>
      </Label>
    </Container>
  );
};

export default RadioButtonBox;
