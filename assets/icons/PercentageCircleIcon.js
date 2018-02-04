import React from 'react';

const PercentageCircleIcon = ({ width, height, color, scale, percentage }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    width={width * scale}
    height={height * scale}
  >
    <defs>
      <linearGradient
        id="PercentageCircleIcon"
        x1="0%"
        x2="0%"
        y1="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="rgb(125,202,56)" stopOpacity="1" />
        <stop offset="100%" stopColor="rgb(2,120,83)" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      fill={color}
      stroke="url(#PercentageCircleIcon)"
      strokeWidth={4}
      strokeDasharray={`${percentage}, 100`}
      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    />
  </svg>
);

PercentageCircleIcon.defaultProps = {
  width: 95,
  height: 95,
  color: 'black',
  scale: 1
};

export default PercentageCircleIcon;
