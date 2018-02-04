import React from 'react';
import Div from '../../common/Div';
import { Buildings } from '../../../assets';
import { theme } from '../../common';

const OuterContainer = Div.extend`
  justify-content: center;
  height: 326px;
  align-items: center;
  flex-direction: column;
  background: url(${Buildings}) no-repeat;
  background-size: cover;
`;

const Container = Div.extend`
  width: 1280px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Order = Div.extend`
  font-size: 40px;
  font-weight: 300;
  color: white;
  margin-bottom: 30px;
`;

const ListYourSpace = Div.extend`
  ${theme.button1};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 15px 40px;
  border-radius: 30px;
`;

const StartHosting = () => (
  <OuterContainer>
    <Container>
      <Order>Start hosting with Roomsie in 5 easy steps</Order>
      <ListYourSpace>List Your Space</ListYourSpace>
    </Container>
  </OuterContainer>
);

export default StartHosting;
