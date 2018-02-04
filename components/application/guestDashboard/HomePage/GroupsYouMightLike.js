import React, { Component } from 'react';
import { Div, theme, ReactSlick as Slider } from 'components/common';
import { SampleImage } from 'assets/index';

const Container = Div.extend`
  background-color: white;
  ${theme.shadow};
  align-items: flex-start;
  width: 287px;
  padding: 30px 30px 50px 30px;
  margin: 10px;
  flex-direction: column;
`;

const Column = Div.extend`
  width: 100%;
  flex-direction: column;
`;

const CarousalContainer = Column.extend`
  padding: 0 10px;
`;

const Flex = Div.extend`
  flex: 1;
  width: 100%;
  margin-bottom: 5px;
  background-color: red;
`;

const TextContainer = Div.extend`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 10px 20px 10px;
`;

const Img = Div.withComponent('img').extend`
  flex: 1;
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
      <Column>
        <Flex>
          <Img src={SampleImage} alt="sample image" />
        </Flex>
        <Flex>
          <Img src={SampleImage} alt="sample image" />
        </Flex>
      </Column>
      <Column>
        <Flex>
          <Img src={SampleImage} alt="sample image" />
        </Flex>
        <Flex>
          <Img src={SampleImage} alt="sample image" />
        </Flex>
      </Column>
      <Column>
        <Flex>
          <Img src={SampleImage} alt="sample image" />
        </Flex>
        <Flex>
          <Img src={SampleImage} alt="sample image" />
        </Flex>
      </Column>
    </Slider>
  );
};

class GroupsYouMightLike extends Component {
  render() {
    return (
      <Container>
        <TextContainer>Groups you might like</TextContainer>
        <CarousalContainer>
          <Carousel />
        </CarousalContainer>
      </Container>
    );
  }
}

export default GroupsYouMightLike;
