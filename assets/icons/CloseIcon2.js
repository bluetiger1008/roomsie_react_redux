import React from 'react';

const ClockIcon2 = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <text
      kerning="auto"
      fontFamily="SourceSansPro"
      fill={color}
      transform="matrix( 1.08906831715773, 1.08906836476243, -1.08906836476242, 1.08906831715774,-5.4743064130214, 6.19058669796121)"
      fontSize="16px"
    >
      &#43;
    </text>
  </svg>
);

ClockIcon2.defaultProps = {
  width: 13,
  height: 12,
  color: 'black',
  scale: 1
};

export default ClockIcon2;
