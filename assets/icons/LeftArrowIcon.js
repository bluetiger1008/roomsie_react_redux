import React from 'react';

const LeftArrowIcon = ({ width, height, color, scale, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    style={style}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M7.505,14.461 C7.602,14.558 7.723,14.607 7.856,14.607 C7.989,14.607 8.110,14.558 8.207,14.461 C8.401,14.268 8.401,13.953 8.207,13.759 L2.037,7.583 L8.207,1.408 C8.401,1.214 8.401,0.899 8.207,0.705 C8.013,0.512 7.699,0.512 7.505,0.705 L0.985,7.232 C0.791,7.426 0.791,7.741 0.985,7.935 L7.505,14.461 Z"
    />
  </svg>
);

LeftArrowIcon.defaultProps = {
  width: 9,
  height: 15,
  color: 'black',
  scale: 1
};

export default LeftArrowIcon;
