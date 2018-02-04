import React from 'react';
import DatePicker from 'react-datepicker';
import { Div, Column } from 'components/common';
import { CalendarIcon2 } from 'assets/index';

import 'react-datepicker/dist/react-datepicker.css';

const Container = Column.extend`
  position: relative;
  width: 200px;

  input {
    height: 47px;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: #858585;
    outline: none;
    border: 1px solid ${props => (props.error ? '#ce3849' : '#b2b2b2')};
    border-radius: 2px;
    padding: 0 20px;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    pointer-events: none;
  }
`;

const Error = Div.extend`
  color: #ce3849;
  padding: 0 0 8px 0;
  font-size: 14px;
`;

const Picker = props => {
  const { placeholder, onChange, value, maxDate, minDate, error } = props;

  return (
    <Container error={error}>
      <DatePicker
        selected={value}
        placeholderText={placeholder}
        onChange={onChange}
        maxDate={maxDate}
        minDate={minDate}
        readOnly={true}
      />
      <CalendarIcon2 color={'#858585'} />
      {error ? (
        <Error>
          {placeholder} {error}
        </Error>
      ) : null}
    </Container>
  );
};

export default Picker;
