import React from 'react';

const CalendarIcon3 = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M0.225,19.250 L0.225,7.293 L18.766,7.293 L18.766,19.250 L0.225,19.250 ZM0.225,2.354 L4.033,2.354 L4.033,0.747 L5.168,0.747 L5.168,2.354 L8.928,2.354 L8.928,0.747 L10.063,0.747 L10.063,2.354 L13.823,2.354 L13.823,0.747 L14.958,0.747 L14.958,2.354 L18.766,2.354 L18.766,6.158 L0.225,6.158 L0.225,2.354 Z"
    />
  </svg>
);

CalendarIcon3.defaultProps = {
  width: 19,
  height: 20,
  color: '#c5c5c5',
  scale: 1
};

export default CalendarIcon3;
