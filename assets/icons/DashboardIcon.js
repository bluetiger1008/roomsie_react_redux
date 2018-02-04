import React from 'react';

const DashboardIcon = ({ width, height, color, colorOverlay, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <defs>
      <filter id="DashboardIcon">
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
    <g filter="url(#DashboardIcon)">
      <path
        fillRule="evenodd"
        fill={color}
        d="M22.051,22.051 C19.633,24.468 16.419,25.800 13.000,25.800 C9.581,25.800 6.367,24.468 3.949,22.051 C1.531,19.633 0.200,16.419 0.200,13.000 C0.200,9.581 1.531,6.366 3.949,3.949 C6.367,1.531 9.581,0.200 13.000,0.200 C16.419,0.200 19.633,1.531 22.051,3.949 C24.469,6.366 25.800,9.581 25.800,13.000 C25.800,16.419 24.469,19.633 22.051,22.051 ZM13.000,1.869 C6.863,1.869 1.869,6.862 1.869,13.000 C1.869,19.137 6.863,24.130 13.000,24.130 C19.137,24.130 24.130,19.137 24.130,13.000 C24.130,6.862 19.137,1.869 13.000,1.869 ZM19.142,10.126 L21.756,9.277 L22.272,10.865 L19.658,11.714 L19.142,10.126 ZM16.280,7.066 L17.896,4.842 L19.246,5.824 L17.631,8.047 L16.280,7.066 ZM13.000,15.998 C11.821,15.998 10.862,15.039 10.862,13.861 C10.862,12.978 11.400,12.219 12.165,11.893 L12.165,7.781 L13.835,7.781 L13.835,11.893 C14.600,12.219 15.138,12.978 15.138,13.861 C15.138,15.039 14.179,15.998 13.000,15.998 ZM13.000,13.393 C12.742,13.393 12.532,13.603 12.532,13.861 C12.532,14.119 12.742,14.329 13.000,14.329 C13.258,14.329 13.468,14.119 13.468,13.861 C13.468,13.603 13.258,13.393 13.000,13.393 ZM12.165,3.522 L13.835,3.522 L13.835,6.271 L12.165,6.271 L12.165,3.522 ZM6.754,5.823 L8.104,4.841 L9.720,7.065 L8.369,8.046 L6.754,5.823 ZM6.342,11.714 L3.728,10.865 L4.244,9.276 L6.858,10.126 L6.342,11.714 ZM6.859,15.873 L4.245,16.723 L3.729,15.135 L6.343,14.286 L6.859,15.873 ZM17.336,22.080 L8.664,22.080 L8.664,16.978 L17.336,16.978 L17.336,22.080 ZM15.667,18.648 L10.333,18.648 L10.333,20.411 L15.667,20.411 L15.667,18.648 ZM22.272,15.133 L21.756,16.722 L19.142,15.872 L19.658,14.284 L22.272,15.133 Z"
      />
    </g>
  </svg>
);

DashboardIcon.defaultProps = {
  width: 26,
  height: 26,
  color: '#c24045',
  colorOverlay: '#a3a9ac',
  scale: 1
};

export default DashboardIcon;
