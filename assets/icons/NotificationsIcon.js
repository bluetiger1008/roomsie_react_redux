import React from 'react';

const NotificationsIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M0.693,19.988 C2.826,17.204 4.001,13.789 4.001,10.267 L4.001,6.614 C4.001,3.306 6.692,0.616 10.000,0.616 C13.308,0.616 15.998,3.306 15.998,6.614 L15.998,10.267 C15.998,13.789 17.155,17.204 19.307,19.988 L0.693,19.988 ZM10.000,23.384 C8.443,23.384 7.128,22.334 6.729,20.908 L13.271,20.908 C12.871,22.334 11.557,23.384 10.000,23.384 Z"
    />
  </svg>
);

NotificationsIcon.defaultProps = {
  width: 20,
  height: 24,
  color: 'black',
  scale: 1
};

export default NotificationsIcon;
