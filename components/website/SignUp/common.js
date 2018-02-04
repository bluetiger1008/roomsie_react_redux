import { Div, Column } from 'components/common';

export const Slide = Column.extend`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Text1 = Div.extend`
  width: 100%;
  color: #494949;
  font-size: 26px;
  font-weight: 700;
  justify-content: center;
  margin: 15px 0;
`;

export const Regular = Div.extend`
  color: #4d4d4d;
  font-size: 19px;
  font-weight: 400;
  text-align: center;
  margin: 0 0 30px 0;
`;
