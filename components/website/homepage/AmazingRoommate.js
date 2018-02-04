import React from 'react';
import { Div, ReactSlick as Slider } from 'components/common';
import { Roommates } from '../../../assets';

const OuterContainer = Div.extend`
  justify-content: flex-start;
  overflow: hidden;
  align-items: center;
  height: 687px;
  flex-direction: column;
`;

const Container = Div.extend`
  width: 100%;
  position: relative;
  top: -25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgContainer = Div.extend`
  width: 50%;
  justify-content: flex-end;
`;

const Statement = Div.extend`
  font-size: 40px;
  font-weight: 300;
  color: #1e376f;
  margin-bottom: 20px;
`;

const Testimonial = Div.extend`
  color: #454140;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 35px;
`;

const TestimonialBy = Testimonial.extend`
  margin-bottom: 0;
  font-weight: 600;
  font-size: 16px;
`;

const Position = TestimonialBy.extend`
  font-weight: 400;
`;

const TextContainer = Div.extend`
  flex-direction: column;
  justify-content: flex-end;
  margin: auto auto 90px 50px;
`;

const Slide = Div.extend`
  display: flex !important;
  width: 100%;
  justify-content: space-between;
`;

const Column = Div.extend`
  width: 100%;
  flex-direction: column;
`;

const FullDiv = Div.extend`
  width: 100%;
`;

const TestimonialContainer = () => (
  <FullDiv>
    <ImgContainer>
      <img src={Roommates} alt="" />
    </ImgContainer>
    <TextContainer>
      <Statement>
        Roomsie got me an amazing
        <br />roommate!
      </Statement>
      <Testimonial>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Suspendisse
        id est ut lorem accumsan cursus.
      </Testimonial>
      <TestimonialBy>NATALIE PORTER</TestimonialBy>
      <Position>Program Director, Duke U.</Position>
    </TextContainer>
  </FullDiv>
);

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
        <TestimonialContainer />
      </Slide>
      <Slide>
        <TestimonialContainer />
      </Slide>
      <Slide>
        <TestimonialContainer />
      </Slide>
      <Slide>
        <TestimonialContainer />
      </Slide>
    </Slider>
  );
};

const AmazingRoommate = () => (
  <OuterContainer>
    <Container>
      <Column>
        <Carousel />
      </Column>
    </Container>
  </OuterContainer>
);

export default AmazingRoommate;
