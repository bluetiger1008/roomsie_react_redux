import React from 'react';

const PointerIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M12.681,2.564 C11.309,1.180 9.484,0.417 7.544,0.417 C5.603,0.417 3.779,1.180 2.407,2.564 C-0.132,5.124 -0.447,9.942 1.724,12.862 L7.544,21.339 L13.355,12.873 C15.536,9.942 15.220,5.124 12.681,2.564 ZM7.611,10.352 C6.149,10.352 4.959,9.152 4.959,7.677 C4.959,6.203 6.149,5.002 7.611,5.002 C9.073,5.002 10.263,6.203 10.263,7.677 C10.263,9.152 9.073,10.352 7.611,10.352 Z"
    />
  </svg>
);

PointerIcon.defaultProps = {
  width: 15,
  height: 22,
  color: 'black',
  scale: 1
};

export default PointerIcon;
