import React from 'react';

const ForwardIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M9.100,11.000 L12.700,7.500 L0.500,7.500 L0.500,5.500 L12.700,5.500 L9.100,2.000 L10.600,0.600 L16.500,6.500 L10.600,12.400 L9.100,11.000 Z"
    />
  </svg>
);

ForwardIcon.defaultProps = {
  width: 17,
  height: 13,
  color: 'black',
  scale: 1
};

export default ForwardIcon;
