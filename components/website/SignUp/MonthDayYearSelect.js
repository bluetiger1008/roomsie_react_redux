import React, { Component } from 'react';
import { Div, Select, Column } from 'components/common';
import moment from 'moment-timezone';

const OutsideContainer = Column.extend`
  flex: 1;
`;

const Container = Div.extend`
  padding: 8px 0;
`;

const InputContainer = Div.extend`
  position: relative;
  width: 100%;
  height: 47px;
`;

const MonthContainer = InputContainer.extend`
  flex: 0.4;
  margin-right: 10px;
`;

const DayContainer = InputContainer.extend`
  flex: 0.25;
  margin-right: 10px;
`;

const YearContainer = InputContainer.extend`
  flex: 0.35;
`;

const Error = Div.extend`
  color: #ce3849;
  padding: 0 0 8px 0;
  font-size: 14px;
`;

class MonthDayYearSelect extends Component {
  constructor() {
    super();

    this.state = {
      month: '',
      day: '',
      year: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let month,
      day,
      year = '';

    if (nextProps.value) {
      [year, month, day] = nextProps.value.split('-').map(x => parseInt(x));
    }

    this.setState({ month, day, year });
  }

  setDate() {
    const { year, month, day } = this.state;
    let date;
    if (year || month || day) {
      date = `${year}-${month}-${day}`;
    } else {
      date = null;
    }
    this.props.onChange(date);
  }

  handleInputChange(unit, { value }) {
    this.setState(
      {
        [unit]: value
      },
      this.setDate
    );
  }

  render() {
    const { month, day, year } = this.state;
    const { error, placeholder } = this.props;
    const monthOptions = moment
      .months()
      .map((month, i) => ({ label: month, value: i + 1 }));
    const daysOptions = [...Array(31)].map((ele, i) => ({
      label: i + 1,
      value: i + 1
    }));
    const yearsOptions = [...Array(82)].map((ele, i) => {
      const year = new Date().getFullYear() - 18 - i;
      return { label: year, value: year };
    });

    return (
      <OutsideContainer>
        <Container>
          <Div>
            <MonthContainer>
              <Select
                hasError={error}
                name={'month'}
                placeholder={'Month'}
                value={month}
                options={monthOptions}
                onChange={this.handleInputChange.bind(null, 'month')}
              />
            </MonthContainer>
            <DayContainer>
              <Select
                hasError={error}
                name={'day'}
                placeholder={'Day'}
                value={day}
                options={daysOptions}
                onChange={this.handleInputChange.bind(null, 'day')}
              />
            </DayContainer>
            <YearContainer>
              <Select
                hasError={error}
                name={'year'}
                placeholder={'Year'}
                value={year}
                options={yearsOptions}
                onChange={this.handleInputChange.bind(null, 'year')}
              />
            </YearContainer>
          </Div>
        </Container>
        {error ? (
          <Error>
            {placeholder} {error}
          </Error>
        ) : null}
      </OutsideContainer>
    );
  }
}

export default MonthDayYearSelect;
