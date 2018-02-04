// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
  desktop: 1280
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

// fire resize event in Chrome, Firefox and IE
export const fireResize = () => {
  const resizeEvent = window.document.createEvent('UIEvents');
  resizeEvent.initUIEvent('resize', true, false, window, 0);
  window.dispatchEvent(resizeEvent);
};
