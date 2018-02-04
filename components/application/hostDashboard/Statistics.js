import React, { Component } from 'react';
import {
  ListingView,
  PercentageCircleIcon,
  PercentUpIcon
} from '../../../assets';
import { Div, theme, Column } from '../../common';

const Container = Div.extend`
  background-color: white;
  ${theme.shadow};
  align-items: flex-start;
  width: 367px;
  margin: 10px 10px 10px 0;
  height: ${props => props.height || 'auto'};
  align-self: flex-start;
`;

const ImgContainer = Div.extend`
  align-items: center;
  justify-content: flex-start;
  padding: 0 35px 0 45px;
`;

const TimesViewed = Div.extend`
  font-size: 55px;
  font-weight: 300;
  line-height: 40px;
  justify-content: flex-start;
`;

const Text = Div.extend`
  color: #6a6a6a;
  font-size: 16px;
`;

const Change = Div.extend`
  color: #30c066;
  font-size: 16px;
  font-weight: 600;
  margin-right: 3px;
`;

const Unit = Div.extend`
  font-size: 16px;
`;

const Info = Column.extend`
  padding: 30px 40px 30px 0;
  justify-content: space-between;
`;

const HowManyTimes = () => (
  <Container height={'186px'}>
    <Div style={{ height: '100%' }}>
      <ImgContainer>
        <img src={ListingView} alt="Listing View" />
      </ImgContainer>
      <Info>
        <TimesViewed>103</TimesViewed>
        <Text>Users viewed your listings in the past 15 days</Text>
        <Div>
          <Change>+50</Change>
          <Unit>since last week</Unit>
        </Div>
      </Info>
    </Div>
  </Container>
);

const GraphicContainer = Div.extend`
  width: 95px;
  height: 95px;
  margin: 26px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const GraphicAnimation = Div.extend`
  z-index: 5;
`;

const IconContainer = Div.extend`
  position: absolute;
  z-index: 2;
  width: 73px;
  height: 73px;
  background-color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconOuterContainer = Div.extend`
  position: absolute;
  z-index: 1;
  align-items: center;
  justify-content: center;
  height: 95px;
  width: 95px;
  border-radius: 100%;
  background-color: #e7e7e7;
`;

const PercentageContainer = Div.extend`
  font-size: 55px;
  line-height: 40px;
  font-weight: 300;
`;

const PercentSign = Div.extend`
  font-size: 45px;
  color: #2d2d2d;
  font-weight: 300;
`;

const Percentage = TimesViewed.extend`
  margin-bottom: 5px;
`;

const CurrentOccupancy = ({ percentage }) => (
  <Container height={'147px'}>
    <GraphicContainer>
      <GraphicAnimation>
        <PercentageCircleIcon color={'none'} percentage={percentage} />
      </GraphicAnimation>
      <IconOuterContainer>
        <IconContainer>
          <PercentUpIcon color={'#929292'} />
        </IconContainer>
      </IconOuterContainer>
    </GraphicContainer>
    <Column style={{ alignSelf: 'center' }}>
      <PercentageContainer>
        <Percentage>{percentage}</Percentage>
        <PercentSign>%</PercentSign>
      </PercentageContainer>
      <Text>Current Occupancy</Text>
    </Column>
  </Container>
);

class Statistics extends Component {
  render() {
    return (
      <Column>
        <HowManyTimes />
        <CurrentOccupancy percentage={74} />
      </Column>
    );
  }
}

export default Statistics;
