import { css } from 'styled-components';
import hexRgb from 'hex-rgb';

const dropShadow = (
  angle = 0,
  distance = 0,
  spread = 0,
  size = 0,
  opacity = 1,
  color = '#000',
  inner = false
) => {
  angle = (180 - angle) * Math.PI / 180; // convert to radians
  const hShadow = Math.round(Math.cos(angle) * distance);
  const vShadow = Math.round(Math.sin(angle) * distance);
  const cssSpread = size * spread / 100;
  const blur = size - cssSpread;
  const inset = inner ? 'inset' : '';
  const rgb = hexRgb(color);
  return css`
    box-shadow: ${hShadow}px ${vShadow}px ${blur}px ${cssSpread}px
      rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity}) ${inset};
  `;
};

export default dropShadow;
