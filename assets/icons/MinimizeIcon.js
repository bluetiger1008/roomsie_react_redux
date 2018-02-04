import React from 'react';

const MinimizeIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M14.500,-0.000 L2.500,-0.000 C1.395,-0.000 0.500,0.895 0.500,2.000 C0.500,3.105 1.395,4.000 2.500,4.000 L14.500,4.000 C15.605,4.000 16.500,3.105 16.500,2.000 C16.500,0.895 15.605,-0.000 14.500,-0.000 Z"
    />
  </svg>
);

MinimizeIcon.defaultProps = {
  width: 17,
  height: 4,
  color: 'black',
  scale: 1
};

export default MinimizeIcon;
