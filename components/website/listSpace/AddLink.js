import React from 'react';
import { Div, theme } from 'components/common';

const Container = Div.withComponent('a').extend`
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.green};
  font-size: 18px;
  color: ${theme.colors.inputBlack};
  background-color: white;
  border-radius: 2px;
  height: 56px;
  outline: none;
  cursor: pointer;
`;

const Plus = Div.extend`
  font-size: 32px;
  margin-right: 10px;
  color: ${theme.colors.green};
`;

const AddLink = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Plus>+</Plus> {text}
    </Container>
  );
};

export default AddLink;
