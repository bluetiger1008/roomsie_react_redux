import React from 'react';
import { Div, RadioButton } from 'components/common';
import { uniqueId } from 'lodash';

const Container = Div.extend`
  > div {
    margin-right: 10px;
  }
`;

const RadioButtonGroup = props => {
  const { options, name, onChange } = props;

  const isChecked = value => {
    const checkedValue = props.value;

    if (checkedValue == undefined) {
      return false;
    }

    return checkedValue.toString() == value.toString();
  };

  return (
    <Container>
      {options.map(option => {
        const { value, label } = option;
        const htmlId = uniqueId('radio-');

        return (
          <RadioButton
            id={htmlId}
            name={name}
            value={value}
            key={value}
            checked={isChecked(value)}
            onChange={onChange}
            label={label}
          />
        );
      })}
    </Container>
  );
};

export default RadioButtonGroup;
