import React from 'react';
import Header from './Header';
import Div from '../../common/Div';
import Search from './Search';
import { BackgroundPhoto } from '../../../assets';

const Container = Div.extend`
  position: relative;
  justify-content: flex-end;
  padding-bottom: 50px;
  height: 580px;
  align-items: center;
  flex-direction: column;
  background: url(${BackgroundPhoto}) no-repeat;
  background-size: cover;
`;

const Intro = Div.extend`
  font-size: 40px;
  font-weight: 700;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Cause = Intro.extend`
  font-size: 26px;
  font-weight: 300;
  margin-bottom: 60px;
`;

const TopArea = () => (
  <Container>
    <Header />
    <div>
      <Intro>
        <Div>Budget friendly, fully furnished housing for</Div>
        <Div>students, interns & recent grads.</Div>
      </Intro>
      <Cause>
        Find your housing, connect with your roomies & start your adventure
      </Cause>
      <Search />
    </div>
  </Container>
);

export default TopArea;
