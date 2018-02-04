import React from 'react';

const MessagesIcon = ({ width, height, color, colorOverlay, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <defs>
      <filter id="MessagesIcon">
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
    <g filter="url(#MessagesIcon)">
      <path
        fillRule="evenodd"
        fill={color}
        d="M25.050,19.250 L0.950,19.250 C0.536,19.250 0.200,18.914 0.200,18.499 L0.200,4.109 C0.200,3.695 0.536,3.359 0.950,3.359 L6.170,3.359 L6.170,1.500 C6.170,1.086 6.506,0.750 6.920,0.750 L19.080,0.750 C19.494,0.750 19.830,1.086 19.830,1.500 L19.830,3.359 L25.050,3.359 C25.464,3.359 25.800,3.695 25.800,4.109 L25.800,18.499 C25.800,18.914 25.464,19.250 25.050,19.250 ZM6.170,4.860 L1.700,4.860 L1.700,6.185 L6.170,8.854 L6.170,4.860 ZM18.330,2.251 L7.670,2.251 L7.670,9.749 L8.207,10.070 L13.000,12.932 L17.793,10.070 L18.330,9.749 L18.330,2.251 ZM24.300,4.860 L19.830,4.860 L19.830,8.854 L24.300,6.185 L24.300,4.860 ZM24.300,7.933 L13.384,14.450 C13.266,14.521 13.133,14.556 13.000,14.556 C12.867,14.556 12.734,14.521 12.616,14.450 L1.700,7.933 L1.700,17.749 L24.300,17.749 L24.300,7.933 ZM15.978,8.787 L10.022,8.787 C9.607,8.787 9.272,8.451 9.272,8.037 C9.272,7.622 9.607,7.286 10.022,7.286 L15.978,7.286 C16.393,7.286 16.728,7.622 16.728,8.037 C16.728,8.451 16.393,8.787 15.978,8.787 ZM15.978,6.369 L10.022,6.369 C9.607,6.369 9.272,6.033 9.272,5.618 C9.272,5.204 9.607,4.868 10.022,4.868 L15.978,4.868 C16.393,4.868 16.728,5.204 16.728,5.618 C16.728,6.033 16.393,6.369 15.978,6.369 Z"
      />
    </g>
  </svg>
);

MessagesIcon.defaultProps = {
  width: 26,
  height: 20,
  color: '#c24045',
  colorOverlay: '#a3a9ac',
  scale: 1
};

export default MessagesIcon;
