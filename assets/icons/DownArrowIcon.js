import React from 'react';

const DownArrowIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
    viewBox={`0 0 ${width} ${height}`}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M0.657,1.487 C0.588,1.418 0.553,1.332 0.553,1.237 C0.553,1.142 0.588,1.055 0.657,0.986 C0.795,0.848 1.020,0.848 1.159,0.986 L5.570,5.393 L9.981,0.986 C10.119,0.848 10.344,0.848 10.483,0.986 C10.621,1.124 10.621,1.349 10.483,1.487 L5.821,6.145 C5.682,6.283 5.457,6.283 5.319,6.145 L0.657,1.487 Z"
    />
  </svg>
);

DownArrowIcon.defaultProps = {
  width: 11,
  height: 7,
  color: 'black',
  scale: 1
};

export default DownArrowIcon;
