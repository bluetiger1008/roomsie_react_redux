import React from 'react';

const MyStaysIcon = ({ width, height, color, colorOverlay, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <defs>
      <filter id="MyStaysIcon">
        <feFlood
          floodColor={colorOverlay || color}
          floodOpacity="1"
          result="floodOut"
        />
        <feComposite
          operator="atop"
          in="floodOut"
          in2="SourceGraphic"
          result="compOut"
        />
        <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#MyStaysIcon)">
      <path
        fillRule="evenodd"
        fill={color}
        d="M23.524,9.934 L23.524,5.095 C23.524,2.740 21.610,0.825 19.258,0.825 L6.742,0.825 C4.389,0.825 2.475,2.741 2.475,5.095 L2.475,9.934 L0.200,9.934 L0.200,22.175 L1.907,22.175 L1.907,17.336 L24.093,17.336 L24.093,22.175 L25.800,22.175 L25.800,9.934 L23.524,9.934 ZM4.182,5.095 C4.182,3.682 5.331,2.533 6.742,2.533 L19.258,2.533 C20.669,2.533 21.818,3.682 21.818,5.095 L21.818,9.934 L18.973,9.934 L18.973,4.241 L7.027,4.241 L7.027,9.934 L4.182,9.934 L4.182,5.095 ZM17.267,5.949 L17.267,9.934 L8.733,9.934 L8.733,5.949 L17.267,5.949 ZM24.093,15.628 L1.907,15.628 L1.907,11.642 L24.093,11.642 L24.093,15.628 L24.093,15.628 Z"
      />
    </g>
  </svg>
);

MyStaysIcon.defaultProps = {
  width: 26,
  height: 23,
  color: '#c24045',
  colorOverlay: '#a3a9ac',
  scale: 1
};

export default MyStaysIcon;
