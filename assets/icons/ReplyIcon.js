import React from 'react';

const ReplyIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M0.500,4.900 L6.500,-0.000 L6.500,3.000 C7.000,3.000 7.600,3.000 8.500,3.000 C16.500,3.000 16.500,11.000 16.500,11.000 C16.500,11.000 15.500,7.000 8.700,7.000 C7.600,7.000 6.900,7.000 6.500,7.000 L6.500,9.900 L0.500,4.900 Z"
    />
  </svg>
);

ReplyIcon.defaultProps = {
  width: 17,
  height: 11,
  color: 'black',
  scale: 1
};

export default ReplyIcon;
