import React from 'react';

const MyEventsIcon = ({ width, height, color, colorOverlay, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <defs>
      <filter id="MyEventsIcon">
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
    <g filter="url(#MyEventsIcon)">
      <path
        fillRule="evenodd"
        fill={color}
        d="M23.550,25.800 L2.450,25.800 C1.209,25.800 0.200,24.791 0.200,23.550 L0.200,5.450 C0.200,4.209 1.209,3.200 2.450,3.200 L3.200,3.200 L3.200,2.450 C3.200,1.209 4.209,0.200 5.450,0.200 C6.691,0.200 7.700,1.209 7.700,2.450 L7.700,3.200 L18.300,3.200 L18.300,2.450 C18.300,1.209 19.309,0.200 20.550,0.200 C21.791,0.200 22.800,1.209 22.800,2.450 L22.800,3.200 L23.550,3.200 C24.791,3.200 25.800,4.209 25.800,5.450 L25.800,23.550 C25.800,24.791 24.791,25.800 23.550,25.800 ZM6.200,2.450 C6.200,2.036 5.864,1.700 5.450,1.700 C5.036,1.700 4.700,2.036 4.700,2.450 L4.700,5.450 C4.700,5.864 5.036,6.200 5.450,6.200 C5.864,6.200 6.200,5.864 6.200,5.450 L6.200,2.450 ZM21.300,2.450 C21.300,2.036 20.963,1.700 20.550,1.700 C20.136,1.700 19.800,2.036 19.800,2.450 L19.800,5.450 C19.800,5.864 20.136,6.200 20.550,6.200 C20.963,6.200 21.300,5.864 21.300,5.450 L21.300,2.450 ZM24.300,5.450 C24.300,5.036 23.964,4.700 23.550,4.700 L22.800,4.700 L22.800,5.450 C22.800,6.691 21.791,7.700 20.550,7.700 C19.309,7.700 18.300,6.691 18.300,5.450 L18.300,4.700 L7.700,4.700 L7.700,5.450 C7.700,6.691 6.691,7.700 5.450,7.700 C4.209,7.700 3.200,6.691 3.200,5.450 L3.200,4.700 L2.450,4.700 C2.036,4.700 1.700,5.036 1.700,5.450 L1.700,9.300 L24.300,9.300 L24.300,5.450 ZM24.300,10.800 L1.700,10.800 L1.700,23.550 C1.700,23.964 2.036,24.300 2.450,24.300 L23.550,24.300 C23.964,24.300 24.300,23.964 24.300,23.550 L24.300,10.800 ZM20.500,22.800 L17.500,22.800 C17.086,22.800 16.750,22.464 16.750,22.050 L16.750,19.050 C16.750,18.636 17.086,18.300 17.500,18.300 L20.500,18.300 C20.914,18.300 21.250,18.636 21.250,19.050 L21.250,22.050 C21.250,22.464 20.914,22.800 20.500,22.800 ZM19.750,19.800 L18.250,19.800 L18.250,21.300 L19.750,21.300 L19.750,19.800 ZM20.500,16.800 L17.500,16.800 C17.086,16.800 16.750,16.464 16.750,16.050 L16.750,13.050 C16.750,12.636 17.086,12.300 17.500,12.300 L20.500,12.300 C20.914,12.300 21.250,12.636 21.250,13.050 L21.250,16.050 C21.250,16.464 20.914,16.800 20.500,16.800 ZM19.750,13.800 L18.250,13.800 L18.250,15.300 L19.750,15.300 L19.750,13.800 ZM14.500,22.800 L11.500,22.800 C11.086,22.800 10.750,22.464 10.750,22.050 L10.750,19.050 C10.750,18.636 11.086,18.300 11.500,18.300 L14.500,18.300 C14.914,18.300 15.250,18.636 15.250,19.050 L15.250,22.050 C15.250,22.464 14.914,22.800 14.500,22.800 ZM13.750,19.800 L12.250,19.800 L12.250,21.300 L13.750,21.300 L13.750,19.800 ZM14.500,16.800 L11.500,16.800 C11.086,16.800 10.750,16.464 10.750,16.050 L10.750,13.050 C10.750,12.636 11.086,12.300 11.500,12.300 L14.500,12.300 C14.914,12.300 15.250,12.636 15.250,13.050 L15.250,16.050 C15.250,16.464 14.914,16.800 14.500,16.800 ZM13.750,13.800 L12.250,13.800 L12.250,15.300 L13.750,15.300 L13.750,13.800 ZM8.500,22.800 L5.500,22.800 C5.086,22.800 4.750,22.464 4.750,22.050 L4.750,19.050 C4.750,18.636 5.086,18.300 5.500,18.300 L8.500,18.300 C8.914,18.300 9.250,18.636 9.250,19.050 L9.250,22.050 C9.250,22.464 8.914,22.800 8.500,22.800 ZM7.750,19.800 L6.250,19.800 L6.250,21.300 L7.750,21.300 L7.750,19.800 ZM8.500,16.800 L5.500,16.800 C5.086,16.800 4.750,16.464 4.750,16.050 L4.750,13.050 C4.750,12.636 5.086,12.300 5.500,12.300 L8.500,12.300 C8.914,12.300 9.250,12.636 9.250,13.050 L9.250,16.050 C9.250,16.464 8.914,16.800 8.500,16.800 ZM7.750,13.800 L6.250,13.800 L6.250,15.300 L7.750,15.300 L7.750,13.800 Z"
      />
    </g>
  </svg>
);

MyEventsIcon.defaultProps = {
  width: 26,
  height: 26,
  color: '#c24045',
  colorOverlay: '#a3a9ac',
  scale: 1
};

export default MyEventsIcon;
