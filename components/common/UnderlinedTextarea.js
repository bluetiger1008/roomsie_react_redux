import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { Div } from './';

const InputControl = Div.extend`
  width: 100%;

  textarea {
    border: none;
    border-bottom: 1px solid #d7d7d7;
    padding-bottom: 10px;
    font-size: 18px;
    width: 100%;
    resize: none !important;
    min-height: 37px;
    overflow-y: hidden !important;
    &:focus {
      outline: none;
    }
  }
`;

const UnderlinedTextarea = props => {
  return (
    <InputControl>
      <TextareaAutosize {...props} />
    </InputControl>
  );
};

export default UnderlinedTextarea;
