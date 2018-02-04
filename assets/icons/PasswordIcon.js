import React from 'react';

const PasswordIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M13.602,10.395 L13.602,6.257 C13.602,3.215 11.127,0.740 8.086,0.740 C5.044,0.740 2.569,3.215 2.569,6.257 L2.569,10.395 C1.428,10.395 0.500,11.323 0.500,12.464 L0.500,20.739 C0.500,21.880 1.428,22.808 2.569,22.808 L13.602,22.808 C14.743,22.808 15.671,21.880 15.671,20.739 L15.671,12.464 C15.671,11.323 14.743,10.395 13.602,10.395 ZM3.948,6.257 C3.948,3.975 5.804,2.120 8.086,2.120 C10.367,2.120 12.223,3.975 12.223,6.257 L12.223,10.395 L3.948,10.395 L3.948,6.257 ZM14.292,20.739 C14.292,21.119 13.982,21.428 13.602,21.428 L2.569,21.428 C2.189,21.428 1.879,21.119 1.879,20.739 L1.879,12.464 C1.879,12.083 2.189,11.774 2.569,11.774 L13.602,11.774 C13.982,11.774 14.292,12.083 14.292,12.464 L14.292,20.739 ZM8.775,16.103 L8.775,14.532 C8.775,14.151 8.466,13.843 8.086,13.843 C7.705,13.843 7.396,14.151 7.396,14.532 L7.396,16.103 C6.986,16.342 6.706,16.782 6.706,17.291 C6.706,18.052 7.324,18.670 8.086,18.670 C8.847,18.670 9.465,18.052 9.465,17.291 C9.465,16.782 9.186,16.342 8.775,16.103 Z"
    />
  </svg>
);

PasswordIcon.defaultProps = {
  width: 16,
  height: 23,
  color: 'black',
  scale: 1
};

export default PasswordIcon;
