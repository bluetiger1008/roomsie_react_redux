import React from 'react';

const EditIcon = ({ width, height, colorOverlay, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <defs>
      <filter
        filterUnits="userSpaceOnUse"
        id="EditIcon"
        x="0px"
        y="0px"
        width={width * scale}
        height={height * scale}
      >
        <feOffset in="SourceAlpha" dx="0" dy="1" />
        <feGaussianBlur result="blurOut" stdDeviation="0" />
        <feFlood floodColor={colorOverlay || color} result="floodOut" />
        <feComposite operator="atop" in="floodOut" in2="blurOut" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.07" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#EditIcon)">
      <path
        fillRule="evenodd"
        fill={color}
        d="M16.733,5.506 L7.574,14.664 C7.572,14.667 7.570,14.669 7.567,14.671 L3.342,10.445 C3.344,10.443 3.346,10.440 3.348,10.438 L12.507,1.279 C12.931,0.855 13.619,0.855 14.044,1.279 L16.733,3.969 C17.158,4.393 17.158,5.081 16.733,5.506 ZM2.106,17.328 C1.700,17.499 1.230,17.407 0.918,17.095 C0.606,16.782 0.513,16.313 0.684,15.906 L2.352,11.929 L6.084,15.661 L2.106,17.328 Z"
      />
    </g>
  </svg>
);

EditIcon.defaultProps = {
  width: 19,
  height: 19,
  color: 'black',
  colorOverlay: 'black',
  scale: 1
};

export default EditIcon;
