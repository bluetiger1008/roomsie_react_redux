import { css } from 'styled-components';
import dropShadow from './dropShadow';

export const colors = {
  red: '#9C0A0B',
  lightRed: '#C34046',
  blue: '#1E376F',
  darkGrey: '#454140',
  grey: '#C6C2C3',
  background: '#f3f5f6',

  link: '#3A8FD2',
  textColor: '#494949',
  yellow: '#E6D19A',
  lightYellow: '#e9e5da',
  green: '#48B985',
  darkGreen: '#329567',
  cardBoxGrey: '#E4E4E4',
  cardBoxDarkGrey: '#858585',
  cardBoxShadow: '#DFDFDF',
  input: '#454140',
  inputBorder: '#B2B2B2',
  inputColor: '#828180',
  inputBlack: '#1b1b1b',

  success: '#37C36C',
  warning: '#FF973C',
  error: '#D9534F'
};

export const h1 = css`
  font-size: 30px;
  color: ${colors.textColor};
  font-weight: 700;
`;

export const h2 = css`
  ${h1};
  font-size: 26px;
`;

export const h3 = css`
  ${h1};
  font-size: 20px;
`;

export const h4 = css`
  ${h1};
  font-size: 18px;
`;

export const h5 = css`
  ${h1};
  font-size: 16px;
`;

export const styleOne = css`
  font-size: 18px;
  color: ${colors.textColor};
  font-weight: 400;
  line-height: 24px;
`;

export const styleTwo = css`
  ${styleOne};
  font-size: 16px;
  line-height: 20px;
`;

export const styleThree = css`
  ${styleTwo};
  font-size: 14px;
  font-weight: 600;
`;

export const link = css`
  font-size: 13px;
  color: ${colors.link};
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    color: black;
  }
`;

export const button1 = css`
  font-size: 16px;
  color: white;
  font-weight: 700;
  outline: none;
  border: none;
  background-color: ${colors.green};
  &:hover {
    background-color: ${colors.darkGreen};
  }
`;

export const button2 = css`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.green};
  background-color: white;
  border: 2px solid ${colors.green};
  &:hover {
    color: ${colors.darkGreen};
    border: 2px solid ${colors.darkGreen};
  }
`;

export const cardBox = css`
  background-color: white;
  border: 1px solid ${colors.cardBoxGrey};
  box-shadow: none;
  &:hover {
    border: 1px solid ${colors.cardBoxDarkGrey};
    box-shadow: 1px 0 13px ${colors.cardBoxShadow};
  }
`;

export const sideNav = css`
  font-size: 18px;
  color: ${colors.input};
  &:hover {
    color: ${colors.link};
  }
`;

export const formInput = css`
  font-size: 16px;
  color: ${colors.border};
  height: 36px;
  background-color: white;
  border: 1px solid ${colors.inputBorder};
`;

export const shadow = css`
  ${dropShadow(124, 2, 0, 4, 0.06)};
`;

export default {
  colors,
  h1,
  h2,
  h3,
  h4,
  h5,
  styleOne,
  styleTwo,
  styleThree,
  link,
  button1,
  button2,
  cardBox,
  sideNav,
  formInput,
  shadow
};
