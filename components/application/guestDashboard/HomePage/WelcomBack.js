import React, { Component } from 'react';
import Div from 'components/common/Div';
import theme from 'components/common/theme';

const Container = Div.extend`
  background-color: ${theme.colors.blue};
  box-shadow: 0 1px 13px ${theme.colors.blue};
  width: 1062px;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Block = Div.extend`
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const PhotoContainer1 = Div.extend`
  height: 80px;
  width: 80px;
  background-color: red;
  border-radius: 50%;
  margin-right: 25px;
`;

const PhotoContainer2 = PhotoContainer1.extend`
  border-radius: 5px;
`;

const TextContainer = Div.extend`
  flex-direction: column;
  align-items: flex-start;
`;

const BigText = Div.extend`
  font-size: 30px;
  font-weight: 300;
  color: white;
`;

const SmallText = Div.extend`
  color: white;
  font-size: 18px;
  font-weight: 400;
`;

const NextStay = Div.extend`
  font-size: 13px;
  font-weight: 600;
  color: ${theme.colors.grey};
  padding-bottom: 10px;
`;

const Info = Div.extend`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

class WelcomBack extends Component {
  render() {
    return (
      <Container>
        <Block>
          <PhotoContainer1 />
          <TextContainer>
            <BigText>Welcome back, John!</BigText>
            <SmallText>
              Get excited to start your Washington, DC adventure!
            </SmallText>
          </TextContainer>
        </Block>
        <Block>
          <PhotoContainer2 />
          <TextContainer>
            <NextStay>MY NEXT STAY</NextStay>
            <div>
              <Info>Jun 28, 2017 - July 8, 2017</Info>
              <Info>Perfect House in Hollywood Hills</Info>
            </div>
          </TextContainer>
        </Block>
      </Container>
    );
  }
}

export default WelcomBack;
