import React from 'react';
import { isNil } from 'lodash';
import Div from './Div';

const CounterContainer = Div.extend`
  align-items: center;
`;

const CounterButton = Div.extend`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${props => (props.disabled ? '#a3dcc2' : '#48b985')};
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: ${props => (props.disabled ? '#a3dcc2' : '#48b985')};
  cursor: pointer;
`;

const CounterValue = Div.extend`
  color: #1b1b1b;
  font-size: 18px;
  width: 50px;
  justify-content: center;
`;

const Counter = ({ value, onChange, minimum = 1, maximum }) => {
  const isMinusDisabled = value <= minimum;
  const isPlusDisabled = !isNil(maximum) && value >= maximum;

  const onClickMinus = () => {
    if (!isMinusDisabled) {
      onChange(value - 1);
    }
  };

  const onClickPlus = () => {
    if (!isPlusDisabled) {
      onChange(value + 1);
    }
  };

  return (
    <CounterContainer>
      <CounterButton disabled={isMinusDisabled} onClick={onClickMinus}>
        -
      </CounterButton>
      <CounterValue>{value}</CounterValue>
      <CounterButton disabled={isPlusDisabled} onClick={onClickPlus}>
        +
      </CounterButton>
    </CounterContainer>
  );
};

export default Counter;
