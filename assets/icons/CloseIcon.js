import React from 'react';

const CloseIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M14.258,12.034 L10.051,7.826 L14.258,3.619 C14.942,2.935 14.447,2.323 13.763,1.639 C13.080,0.956 12.467,0.461 11.784,1.144 L7.576,5.351 L3.493,1.268 C2.809,0.584 2.196,1.079 1.513,1.763 C0.829,2.446 0.334,3.059 1.018,3.743 L5.102,7.826 L0.894,12.034 C0.211,12.717 0.706,13.330 1.389,14.014 C2.073,14.697 2.686,15.192 3.369,14.508 L7.576,10.301 L11.784,14.508 C12.467,15.192 13.080,14.697 13.763,14.014 C14.447,13.330 14.942,12.717 14.258,12.034 Z"
    />
  </svg>
);

CloseIcon.defaultProps = {
  width: 15,
  height: 15,
  color: 'black',
  scale: 1
};

export default CloseIcon;
