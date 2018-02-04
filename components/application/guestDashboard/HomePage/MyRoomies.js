import React, { Component } from 'react';
import Div from 'components/common/Div';
import { times } from 'lodash';
import theme from 'components/common/theme';

const Container = Div.extend`
  background-color: white;
  ${theme.shadow};
  align-items: flex-start;
  width: 672px;
  padding: 30px;
  margin: 10px 10px 10px 0;
  flex-direction: column;
`;

const PhotosContainer = Div.extend`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const PhotoContainer = Div.extend`
  height: 80px;
  width: 80px;
  background-color: red;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.grey};
`;

const ViewAllContainer = PhotoContainer.extend`
  border: none;
  cursor: pointer;
  background-color: #e8f0f8;
  justify-content: center;
  align-items: center;
`;

const ViewAll = Div.extend`
  ${theme.link};
  font-size: 12px;
  ${ViewAllContainer}:hover & {
    color: black;
  }
`;

const TextContainer = Div.extend`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 10px 20px 10px;
`;

class MyRoomies extends Component {
  render() {
    return (
      <Container>
        <TextContainer>My Roomies</TextContainer>
        <PhotosContainer>
          {times(6, i => <PhotoContainer key={i} />)}
          <ViewAllContainer>
            <ViewAll>View All</ViewAll>
          </ViewAllContainer>
        </PhotosContainer>
      </Container>
    );
  }
}

export default MyRoomies;
