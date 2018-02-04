import React from 'react';

const ClockIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M4.937,9.875 C2.222,9.875 -0.000,7.653 -0.000,4.937 C-0.000,2.222 2.222,-0.000 4.937,-0.000 C7.653,-0.000 9.875,2.222 9.875,4.937 C9.875,7.653 7.653,9.875 4.937,9.875 ZM4.937,0.987 C2.765,0.987 0.987,2.765 0.987,4.937 C0.987,7.110 2.765,8.887 4.937,8.887 C7.110,8.887 8.887,7.110 8.887,4.937 C8.887,2.765 7.110,0.987 4.937,0.987 ZM4.444,5.431 L4.444,2.469 L5.184,2.469 L5.184,5.036 L7.406,6.369 L7.011,7.011 L4.444,5.431 Z"
    />
  </svg>
);

ClockIcon.defaultProps = {
  width: 10,
  height: 10,
  color: 'black',
  scale: 1
};

export default ClockIcon;
