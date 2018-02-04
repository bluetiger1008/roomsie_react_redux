import React, { Component } from 'react';
import { css } from 'styled-components';

import { LeftArrowIcon } from '../../../assets';
import { Div, Column } from '../../common';
import moment from 'moment-timezone';

const weekDays = moment.weekdaysMin();
// const months = moment.monthsShort();

const momentShallowSame = (date1, date2) =>
  date1.isSame(date2, 'year') &&
  date1.isSame(date2, 'month') &&
  date1.isSame(date2, 'day');

const Heading = Div.extend`
  font-size: 17px;
  font-weight: 600;
  margin: 10px 0 5px 0;
  align-items: center;
  justify-content: center;
`;

const IconContainer = Div.extend`
  cursor: pointer;
`;

const Box = Column.extend`
  width: 40px;
  position: relative;
  height: 36px;
  align-items: center;
  justify-content: center;
  font-size: 17px;
`;

const DaysAndDateContainer = Div.extend`
  width: 280px;
  min-width: 280px;
  flex-wrap: wrap;
`;

const hoverDateBox = css`
  background-color: #398fd1;
  color: white;
`;

const DateBoxContainer = Box.extend`
  padding: 6px 8px;
  border-bottom: ${props => (props.noBottom ? 'none' : '1px solid #e0e0e0')};
  cursor: pointer;
`;

const DateBox = Box.extend`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  color: ${props => (props.eventOnThisDate ? '#2d2d2d' : '#8b8b8b')};
  ${props => (props.selected ? hoverDateBox : '')};
  ${DateBoxContainer}:hover & {
    ${props => (props.date ? hoverDateBox : '')};
  }
`;

const DayBox = Box.extend`
  color: #2d2d2d;
  border-bottom: 1px solid #e0e0e0;
`;

const Dot = Div.extend`
  position: absolute;
  background: #8b8b8b;
  width: 4px;
  height: 4px;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -5px;
  border-radius: 100%;
`;

const DateContainer = Column.extend`
  justify-content: center;
  width: 30px;
  min-width: 30px;
  align-items: center;
  margin-right: 15px;
`;

const Month = Div.extend`
  font-size: 12px;
  color: #8b8b8b;
`;

const Date = Div.extend`
  font-size: 30px;
  color: #8b8b8b;
`;

const EventInfo = Div.extend`
  color: #2d2d2d;
  font-size: 15px;
`;

const EventContainer = Div.extend`
  padding: 15px;
`;

const DateRender = ({ date, eventOnThisDate, selected, onClick, noBottom }) => {
  if (date === '18' || date === '22' || date === '02') {
    eventOnThisDate = true;
  }
  return (
    <DateBoxContainer onClick={onClick} noBottom={noBottom}>
      <DateBox
        eventOnThisDate={eventOnThisDate}
        date={date}
        selected={selected}
      >
        {date}
        {eventOnThisDate ? <Dot /> : null}
      </DateBox>
    </DateBoxContainer>
  );
};

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      date: moment(),
      selectedDate: moment()
    };
    this.reduceMonth = this.reduceMonth.bind(this);
    this.increaseMonth = this.increaseMonth.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }

  reduceMonth() {
    this.setState(({ date }) => ({
      date: date.subtract(1, 'months')
    }));
  }

  increaseMonth() {
    this.setState(({ date }) => ({
      date: date.add(1, 'months')
    }));
  }

  selectDate(selectedDate) {
    const { onSelect } = this.props;
    this.setState(
      ({ date }) => ({
        selectedDate: moment(
          `${date.month() + 1}-${selectedDate}-${date.year()}`,
          'MM-DD-YYYY'
        )
      }),
      () => {
        if (onSelect) onSelect(this.state.selectedDate.toDate());
      }
    );
  }

  render() {
    const { date, selectedDate } = this.state;
    const month = date.format('MMM');
    const year = date.year();
    const numDays = date.daysInMonth();
    const weekDayFirstOfMonth = date.startOf('month').day();
    const daysArray = Array(weekDayFirstOfMonth)
      .fill('')
      .concat([...Array(numDays + 1).keys()].slice(1));
    const renderDays = weekDays.map(weekDay => (
      <DayBox key={weekDay}>{weekDay}</DayBox>
    ));
    const daysArrayLength = weekDayFirstOfMonth + numDays;
    const lastRowStart = daysArrayLength - daysArrayLength % 7;
    const renderDates = daysArray.map((day, i) => {
      // empty strings are false
      if (day) {
        const currentDate = moment(
          `${date.month() + 1}-${day}-${date.year()}`,
          'MM-DD-YYYY'
        );
        return (
          <DateRender
            key={day}
            noBottom={day > lastRowStart}
            date={('0' + day).slice(-2)}
            selected={momentShallowSame(currentDate, selectedDate)}
            onClick={this.selectDate.bind(null, day)}
          />
        );
      }
      return <DateRender key={`empty-day-${i}`} />;
    });

    return (
      <Column style={{ alignItems: 'center' }}>
        <Column>
          <Heading>
            <IconContainer
              onClick={this.reduceMonth}
              style={{ marginRight: 25 }}
            >
              <LeftArrowIcon color={'#6c6c6c'} />
            </IconContainer>
            {month}&nbsp;{year}
            <IconContainer
              onClick={this.increaseMonth}
              style={{ marginLeft: 25 }}
            >
              <LeftArrowIcon
                color={'#6c6c6c'}
                style={{ transform: 'rotate(180deg)' }}
              />
            </IconContainer>
          </Heading>
          <DaysAndDateContainer>
            {renderDays}
            {renderDates}
          </DaysAndDateContainer>
        </Column>
        <EventContainer>
          <DateContainer>
            <Month>{selectedDate.format('MMM').toUpperCase()}</Month>
            <Date>{selectedDate.date()}</Date>
          </DateContainer>
          <EventInfo>NY Charity Golf Scramble Sponsored by Buick</EventInfo>
        </EventContainer>
      </Column>
    );
  }
}

export default Calendar;
