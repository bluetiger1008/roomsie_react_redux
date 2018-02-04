import React from 'react';

const RightArrowIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M1.487,10.499 C1.418,10.568 1.332,10.603 1.237,10.603 C1.141,10.603 1.055,10.568 0.986,10.499 C0.848,10.361 0.848,10.136 0.986,9.997 L5.393,5.586 L0.986,1.175 C0.848,1.037 0.848,0.812 0.986,0.673 C1.124,0.535 1.349,0.535 1.487,0.673 L6.145,5.335 C6.283,5.474 6.283,5.699 6.145,5.837 L1.487,10.499 Z"
    />
  </svg>
);

RightArrowIcon.defaultProps = {
  width: 7,
  height: 11,
  color: 'black',
  scale: 1
};

export default RightArrowIcon;
