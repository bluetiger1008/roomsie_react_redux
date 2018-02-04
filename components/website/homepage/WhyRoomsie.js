import React from 'react';
import Div from '../../common/Div';
import {
  LeasePeriods,
  NetworkingEvents,
  RoommatesRoulette
} from '../../../assets';
import { theme } from '../../common';

const OuterContainer = Div.extend`
  background-color: white;
  justify-content: center;
  padding: 120px 0 0 0;
`;

const Container = Div.extend`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Question = Div.extend`
  font-size: 40px;
  font-weight: 300;
  color: #1e376f;
  margin-bottom: 40px;
`;

const AnswersContainer = Div.extend`
  width: 100%;
  background-color: #e8ebec;
  max-width: 1900px;
  justify-content: space-between;
  align-items: center;
`;

const AnswerContainer = Div.extend`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  flex: 1;
  padding: 100px 85px;
  background-color: ${props => props.color || 'transparent'};
`;

const Adjective = Div.extend`
  color: #c34046;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
`;

const MainTerm = Div.extend`
  font-size: 26px;
  color: black;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Reasoning = Div.extend`
  color: #454140;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  height: 100px;
  margin-bottom: 30px;
`;

const LearnMore = Div.extend`
  ${theme.button2};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  border-radius: 40px;
  background-color: #f0f2f3;
`;

const ImgContainer = Div.extend`
  height: 115px;
`;

const Answer = ({ adjective, mainTerm, reasoning, src, color }) => (
  <AnswerContainer color={color}>
    <ImgContainer>
      <img src={src} alt={mainTerm} />
    </ImgContainer>
    <Adjective>{adjective}</Adjective>
    <MainTerm>{mainTerm}</MainTerm>
    <Reasoning>{reasoning}</Reasoning>
    <LearnMore>Learn More</LearnMore>
  </AnswerContainer>
);

const reasoningText = {
  leasePeriods:
    "That's why Roomsie offers more flexible leasing options for a variety of different budgets than any other site.",
  networkingEvents:
    'We believe in the power of off-line networking to get the most from your D.C. experience. Roomsie sponsored and guest organized events help you make connections critical to your career.',
  roommateRoulette:
    'We give you the tools you need to connect with other guests who\'s stay overlap with your own before your arrival. Reach out and say "Hello!" to your new bestie and goodbye to poor roommate fit.'
};

const WhyRoomsie = () => (
  <OuterContainer>
    <Container>
      <Question>Why choose Roomsie for your housing needs?</Question>
      <AnswersContainer>
        <Answer
          adjective={'Flexible'}
          mainTerm={'Lease Periods'}
          reasoning={reasoningText['leasePeriods']}
          src={LeasePeriods}
        />
        <Answer
          color={'#f0f2f3'}
          adjective={'Exclusive Roommate Sponsored'}
          mainTerm={'Networking Events'}
          reasoning={reasoningText['networkingEvents']}
          src={NetworkingEvents}
        />
        <Answer
          adjective={'Say Goodbye to'}
          mainTerm={'Roommate Roulette'}
          reasoning={reasoningText['roommateRoulette']}
          src={RoommatesRoulette}
        />
      </AnswersContainer>
    </Container>
  </OuterContainer>
);

export default WhyRoomsie;
