import React from 'react';
import { Div, DatePicker } from 'components/common';
import moment from 'moment-timezone';

const Container = Div.extend`
  > * {
    margin-right: 10px;
  }
`;

const DateRange = props => {
  const { startPlaceholder, onChangeStart, startValue, startError } = props;
  const { endPlaceholder, onChangeEnd, endValue, endError } = props;

  const maxStart = endValue ? moment(endValue).subtract(1, 'day') : null;
  const minEnd = startValue ? moment(startValue).add(1, 'day') : null;

  return (
    <Container>
      <DatePicker
        value={startValue}
        placeholder={startPlaceholder}
        onChange={onChangeStart}
        maxDate={maxStart}
        error={startError}
      />

      <DatePicker
        value={endValue}
        placeholder={endPlaceholder}
        onChange={onChangeEnd}
        minDate={minEnd}
        error={endError}
      />
    </Container>
  );
};

export default DateRange;
