import React from 'react';

const BackArrowIcon = ({ width, height, color, scale, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    style={style}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M6.787,0.279 C7.059,0.007 7.487,0.007 7.758,0.279 C8.021,0.541 8.021,0.978 7.758,1.240 L2.834,6.165 L19.084,6.165 C19.463,6.165 19.774,6.466 19.774,6.845 C19.774,7.223 19.463,7.534 19.084,7.534 L2.834,7.534 L7.758,12.450 C8.021,12.721 8.021,13.159 7.758,13.421 C7.487,13.693 7.059,13.693 6.787,13.421 L0.697,7.330 C0.434,7.068 0.434,6.631 0.697,6.369 L6.787,0.279 Z"
    />
  </svg>
);

BackArrowIcon.defaultProps = {
  width: 20,
  height: 14,
  color: 'rgb(171, 171, 171)',
  scale: 1
};

export default BackArrowIcon;
