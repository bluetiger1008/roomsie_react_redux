import React from 'react';
import Div from './Div';
import theme from './theme';

const DivContainer = Div.withComponent('span').extend`
  width: 25px;
  min-width: 25px;
  height: 20px;
  min-height: 20px;
  background-color: ${theme.colors.green};
  border-radius: 10px;
  color: white;
  justify-content: center;
  align-items: center;
`;

const BadgeCount = ({ count }) => <DivContainer>{count}</DivContainer>;

export default BadgeCount;
