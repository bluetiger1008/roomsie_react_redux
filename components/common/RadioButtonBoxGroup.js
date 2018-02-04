import React from 'react';
import { Div, RadioButtonBox } from 'components/common';

const Container = Div.extend`
  ${Div} {
    > div {
      margin-right: 10px;
    }
  }
  flex-direction: column;
`;

const Error = Div.extend`
  color: #ef585a;
  margin-top: 7px;
  font-size: 13px;
`;

const RadioButtonBoxGroup = props => {
  const { options, label, name, onChange, error } = props;

  const isChecked = value => {
    const checkedValue = props.value;

    if (checkedValue == undefined) {
      return false;
    }

    return checkedValue.toString() == value.toString();
  };

  return (
    <Container>
      <Div>
        {options.map(option => {
          const { value, label, description } = option;

          return (
            <RadioButtonBox
              id={`radio-${value}`}
              name={name}
              value={value}
              key={value}
              checked={isChecked(value)}
              onChange={onChange}
              label={label}
              description={description}
              error={error}
            />
          );
        })}
      </Div>
      {error && (
        <Error>
          {label} {error}
        </Error>
      )}
    </Container>
  );
};

export default RadioButtonBoxGroup;
