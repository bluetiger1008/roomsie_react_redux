import React from 'react';
import { Div, ReactSlick as Slider } from 'components/common';
import {
  Smithsonian,
  USSenate,
  TheWhiteHouse,
  NavyYard
} from '../../../assets';

const OuterContainer = Div.extend`
  background-color: white;
  justify-content: center;
  padding: 100px 0 60px 0;
`;

const Container = Div.extend`
  width: 1280px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
`;

const Question = Div.extend`
  font-size: 40px;
  font-weight: 300;
  color: #1e376f;
`;

const Answer = Div.extend`
  margin: 22px 0 50px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #454140;
  font-size: 20px;
  font-weight: 400;
`;

const ImgContainer = Div.extend`
  position: relative;
`;

const Place = Div.extend`
  font-size: 26px;
  color: white;
  font-weight: 700;
`;

const Price = Div.extend`
  font-size: 17px;
  color: white;
  font-weight: 400;
  margin-top: 5px;
`;

const TextContainer = Div.extend`
  position: absolute;
  bottom: 40px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = Div.withComponent('img').extend`
  border-radius: 2px;
`;

const Ad = ({ name, price, src }) => (
  <ImgContainer>
    <Img src={src} alt={name} />
    <TextContainer>
      <Place>{name}</Place>
      <Price>{`Starting at ${price} per night`}</Price>
    </TextContainer>
  </ImgContainer>
);

const Slide = Div.extend`
  display: flex !important;
  width: 100%;
  justify-content: space-between;
`;

const Column = Div.extend`
  width: 100%;
  flex-direction: column;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <Slide>
        <Ad name={'US Senate'} price={'$50'} src={USSenate} />
        <Ad name={'Smithsonian'} price={'$50'} src={Smithsonian} />
        <Ad name={'Navy Yard'} price={'$50'} src={NavyYard} />
        <Ad name={'The White House'} price={'$50'} src={TheWhiteHouse} />
      </Slide>
      <Slide>
        <Ad name={'US Senate'} price={'$50'} src={USSenate} />
        <Ad name={'Smithsonian'} price={'$50'} src={Smithsonian} />
        <Ad name={'Navy Yard'} price={'$50'} src={NavyYard} />
        <Ad name={'The White House'} price={'$50'} src={TheWhiteHouse} />
      </Slide>
      <Slide>
        <Ad name={'US Senate'} price={'$50'} src={USSenate} />
        <Ad name={'Smithsonian'} price={'$50'} src={Smithsonian} />
        <Ad name={'Navy Yard'} price={'$50'} src={NavyYard} />
        <Ad name={'The White House'} price={'$50'} src={TheWhiteHouse} />
      </Slide>
      <Slide>
        <Ad name={'US Senate'} price={'$50'} src={USSenate} />
        <Ad name={'Smithsonian'} price={'$50'} src={Smithsonian} />
        <Ad name={'Navy Yard'} price={'$50'} src={NavyYard} />
        <Ad name={'The White House'} price={'$50'} src={TheWhiteHouse} />
      </Slide>
    </Slider>
  );
};

const MiddleArea = () => (
  <OuterContainer>
    <Container>
      <Question>Where will you intern or study in Washington, D.C.?</Question>
      <Answer>
        <Div>
          Not sure where to begin? We've created some nifty quick start guides
          to make finding
        </Div>
        <Div> your D.C. housing & new bestie as easy as possible.</Div>
      </Answer>
      <Column>
        <Carousel />
      </Column>
    </Container>
  </OuterContainer>
);

export default MiddleArea;
