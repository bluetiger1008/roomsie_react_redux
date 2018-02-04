import React, { Component } from 'react';
import Div from 'components/common/Div';
import { RightArrowIcon, AttachmentIcon } from 'assets';
import theme from 'components/common/theme';

const Container = Div.extend`
  background-color: white;
  ${theme.shadow};
  align-items: flex-start;
  width: 672px;
  padding: 30px;
  margin: 10px 0 10px 10px;
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
  border-bottom: 1px solid #e0e0e0;
`;

const Name = Div.extend`
  font-size: 16px;
  color: #353639;
  font-weight: 600;
  flex: 0.18;
`;

const Event = Div.withComponent('span').extend`
  font-size: 16px;
  color: #353639;
  font-weight: 400;
`;

const Message = Div.withComponent('span').extend`
  font-size: 16px;
  font-weight: 400;
  color: #747577;
  margin-left: 10px;
`;

const Date = Div.withComponent('span').extend`
  font-size: 14px;
  align-items: center;
  font-weight: 700;
  color: #9e9e9e;
  margin-left: 5px;
  justify-content: flex-end;
`;

const TextContainer = Div.extend`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 10px 20px 10px;
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

const Detail = Div.extend`
  align-items: center;
  flex: 0.7;
`;

const MetaInfo = Div.extend`
  align-items: center;
  flex: 0.12;
  justify-content: flex-end;
`;

const IconContainer = Div.extend`
  padding-left: 10px;
`;

const MetaInfoContainer = ({ attachment, children }) => (
  <MetaInfo>
    {attachment ? (
      <IconContainer>
        <AttachmentIcon color={'#48b885'} />
      </IconContainer>
    ) : null}
    {children}
  </MetaInfo>
);

const MessageRender = ({ attachment }) => (
  <MessageContainer>
    <Name>Jin Wilson</Name>
    <Detail>
      <Event>New Event</Event>
      <Message> - I am following up for my room booking. Can you</Message>
    </Detail>
    <MetaInfoContainer attachment={attachment}>
      <Date>May 15</Date>
    </MetaInfoContainer>
  </MessageContainer>
);

class LatestMessages extends Component {
  render() {
    return (
      <Container>
        <TextContainer>Latest Messages</TextContainer>
        <MessagesContainer>
          {<MessageRender attachment={true} />}
          {<MessageRender />}
          {<MessageRender />}
          {<MessageRender />}
          {<MessageRender />}
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
