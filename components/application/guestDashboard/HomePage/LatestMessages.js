import React, { Component } from 'react';
import Div from 'components/common/Div';
import { RightArrowIcon } from 'assets/index';
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

const MessagesContainer = Div.extend`
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
  align-items: center;
`;

const MessageContainer = Div.extend`
  padding: 25px 0;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.grey};
`;

const Name = Div.extend`
  font-size: 16px;
  font-weight: 600;
`;

const Event = Div.withComponent('span').extend`
  font-size: 16px;
  font-weight: 400;
`;

const Message = Div.withComponent('span').extend`
  font-size: 16px;
  font-weight: 300;
  margin-left: 10px;
`;

const Date = Div.withComponent('span').extend`
  font-size: 14px;
  font-weight: 700;
  margin-left: 10px;
  color: ${theme.colors.darkGrey};
`;

const TextContainer = Div.extend`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 10px 20px 10px;
`;

const Info = Div.extend`
  align-items: center;
  justify-content: center;
`;

const LinkContainer = Div.extend`
  margin-top: 25px;
  align-items: center;
  padding-right: 10px;
  align-self: flex-end;
`;

const Link = Div.extend`
  ${theme.link};
  ${LinkContainer}:hover & {
    color: black;
  }
  margin-right: 10px;
`;

const message = () => (
  <MessageContainer>
    <Name>Jin Wilson</Name>
    <Info>
      <Event>New Event</Event>
      <Message> - I am following up for my room booking. Can you</Message>
      <Date>May 15</Date>
    </Info>
  </MessageContainer>
);

class LatestMessages extends Component {
  render() {
    return (
      <Container>
        <TextContainer>Latest Messages</TextContainer>
        <MessagesContainer>
          {message()}
          {message()}
          {message()}
          {message()}
          {message()}
        </MessagesContainer>
        <LinkContainer>
          <Link>VIEW ALL MESSAGES</Link>
          <RightArrowIcon color={theme.colors.grey} />
        </LinkContainer>
      </Container>
    );
  }
}

export default LatestMessages;
