import React, { Component } from 'react';
import { Div, dropShadow } from '../../common';

const Container = Div.extend`
  background-color: #1d376e;
  ${dropShadow(124, 5, 0, 10, 0.5, '#6180c0')};
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
  border: 3px solid #385695;
  border-radius: 50%;
  margin-right: 25px;
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

const Info = Div.extend`
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-right: ${props => (props.noBorder ? 'none' : '1px solid #3b5794')};
`;

const Number = Div.extend`
  font-size: 45px;
  font-weight: 300;
  padding-right: 5px;
  color: white;
`;

const Unit = Div.extend`
  font-size: 18px;
  font-weight: 600;
  color: #94acdf;
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
          <Info>
            <Number>3</Number>
            <Unit>Properties</Unit>
          </Info>
          <Info>
            <Number>18</Number>
            <Unit>Beds</Unit>
          </Info>
          <Info noBorder>
            <Number>65</Number>
            <Unit>Guests</Unit>
          </Info>
        </Block>
      </Container>
    );
  }
}

export default WelcomBack;
