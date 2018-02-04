import React, { Component } from 'react';
import styled from 'styled-components';

import { ReplyIcon, ForwardIcon } from 'assets';
import NewMessage from '../Common/NewMessage';
import ComposeInput from '../Common/ComposeInput';
import MessageContainer from '../Common/MessageContainer';
import Div from 'components/common/Div';
import SpaceBetween from 'components/common/SpaceBetween';

const Title = styled.div`
  font-size: 22px;
  border-bottom: 1px solid #d6dde0;
  padding-bottom: 15px;
`;

const Header = styled.div`
  margin: 25px 0;
  width: 100%;
`;

const MailerContainer = Div.extend`
  align-items: center;
`;

const DetailContainer = Div.extend`
  flex-direction: column;
`;

const MailerPhoto = Div.extend`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #bebebe;
`;

const MailerInfo = Div.extend`
  flex-direction: column;
  margin-left: 12px;
`;

const MailerName = Div.extend`
  font-size: 18px;
`;

const MailedDate = Div.extend`
  font-size: 14px;
  color: #494949;
`;

const MailActionContainer = Div.extend``;

const MailButton = Div.withComponent('button').extend`
  width: 95px;
  height: 35px;
  border: 1px solid #d6dde0;
  border-radius: 3px;
  justify-content: center;
  background-color: #f3f5f6;
  margin-left: 13px;
  font-size: 14px;
  color: #494949;
  cursor: pointer;
  outline: none;
  align-items: center;
`;

const ButtonText = Div.extend`
  margin-left: 8px;
`;

const Content = Div.extend`
  color: #494949;
  font-size: 16px;
`;

const ComposeContainer = Div.extend`
  border: 1px solid #d6dde0;
  line-height: 1;
  margin-top: 24px;
  color: #494949;
`;

const ActionContainer = Div.extend`
  padding: 15px 15px 40px;
`;

const ReplyContainer = Div.extend`
  flex-direction: column;
  width: 100%;
`;

const Link = Div.extend`
  color: #48b885;
  text-decoration: underline;
  margin: 0 5px;
  cursor: pointer;
`;

class MessageDetail extends Component {
  constructor() {
    super();

    this.state = {
      replyMethod: null
    };

    this.reply = this.reply.bind(this);
    this.forward = this.forward.bind(this);
  }

  reply() {
    this.setState({ replyMethod: 'reply' });
  }

  forward() {
    this.setState({ replyMethod: 'forward' });
  }

  render() {
    const message = 'lorem ipsum dolor sit amet, consecteture adipiscling elit';

    return (
      <MessageContainer>
        <Title>Request sent for capitol Hill at Its Finest!</Title>
        <DetailContainer>
          <Header>
            <SpaceBetween>
              <MailerContainer>
                <MailerPhoto />
                <MailerInfo>
                  <MailerName>Amadeus</MailerName>
                  <MailedDate>
                    to me at 3:40 PM on May 19 (38 days ago)
                  </MailedDate>
                </MailerInfo>
              </MailerContainer>
              <MailActionContainer>
                <MailButton>
                  <ReplyIcon color={'#44484a'} />
                  <ButtonText>Reply</ButtonText>
                </MailButton>
                <MailButton>
                  <ForwardIcon color={'#44484a'} />
                  <ButtonText>Forward</ButtonText>
                </MailButton>
              </MailActionContainer>
            </SpaceBetween>
          </Header>
          <Content>{message}</Content>
          <ComposeContainer>
            {this.state.replyMethod ? (
              <ReplyContainer>
                <ComposeInput placeholder={'To: Amadeus'} />
                <NewMessage />
              </ReplyContainer>
            ) : (
              <ActionContainer>
                Click here to
                <Link onClick={this.reply}>Reply</Link> or
                <Link onClick={this.forward}>Forward</Link>
              </ActionContainer>
            )}
          </ComposeContainer>
        </DetailContainer>
      </MessageContainer>
    );
  }
}

export default MessageDetail;
