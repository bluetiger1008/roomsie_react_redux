import React from 'react';

const FacebookIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M19.262,0.271 C8.919,0.271 0.534,8.656 0.534,19.000 C0.534,29.343 8.919,37.728 19.262,37.728 C29.606,37.728 37.991,29.343 37.991,19.000 C37.991,8.656 29.606,0.271 19.262,0.271 ZM23.698,13.213 L20.882,13.213 C20.549,13.213 20.178,13.651 20.178,14.237 L20.178,16.270 L23.698,16.270 L23.698,19.168 L20.178,19.168 L20.178,27.871 L16.854,27.871 L16.854,19.168 L13.840,19.168 L13.840,16.270 L16.854,16.270 L16.854,14.564 C16.854,12.118 18.552,10.129 20.882,10.129 L23.698,10.129 L23.698,13.213 L23.698,13.213 Z"
    />
  </svg>
);

FacebookIcon.defaultProps = {
  width: 38,
  height: 38,
  color: 'black',
  scale: 1
};

export default FacebookIcon;
