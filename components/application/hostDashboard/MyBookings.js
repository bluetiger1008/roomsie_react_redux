import React, { Component } from 'react';
import { Div, Column } from '../../common';
import { ThemeProvider } from 'styled-components';
import { RightArrowIcon } from '../../../assets';
import theme from '../../common/theme';

const Container = Div.extend`
  background-color: white;
  ${theme.shadow};
  align-items: flex-start;
  width: 672px;
  padding: 30px;
  margin: 10px 0 10px 10px;
  flex-direction: column;
`;

const BookingsContainer = Div.extend`
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
  align-items: center;
`;

const BookingOuterContainer = Column.extend`
  width: 100%;
  margin-bottom: 7px;
  ${theme.shadow};
`;

const BookingContainer = Div.extend`
  padding: 0 20px;
  height: 50px;
  width: 100%;
  background-color: #f8f8f8;
`;

const BottomBorder = Div.extend`
  height: 3px;
  background: linear-gradient(
    to right,
    ${props => props.theme.statusColor},
    white
  );
`;

const Status = Div.extend`
  font-size: 14px;
  flex: 0.18;
  color: ${props => props.theme.statusColor};
  font-weight: 600;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
`;

const Detail = Div.extend`
  flex: 0.64;
  justify-content: flex-start;
  font-size: 16px;
  align-items: center;
  font-weight: 400;
`;

const Date = Div.extend`
  flex: 0.18;
  justify-content: flex-end;
  font-size: 16px;
  align-items: center;
  color: #2d2d2d;
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

const statusColor = status => {
  if (status === 'pending') {
    return '#f26100';
  } else if (status === 'cancelled') {
    return '#b4233e';
  } else if (status === 'confirmed') {
    return '#2fc066';
  }
};

const BookingRender = ({ status }) => (
  <ThemeProvider theme={{ statusColor: statusColor(status) }}>
    <BookingOuterContainer>
      <BookingContainer>
        <Div style={{ width: '100%' }}>
          <Status>{status}</Status>
          <Detail>Amber Wilson at Perfect House in Hollywood Hills</Detail>
          <Date>June 16-20</Date>
        </Div>
      </BookingContainer>
      <BottomBorder />
    </BookingOuterContainer>
  </ThemeProvider>
);

class LatestMessages extends Component {
  render() {
    return (
      <Container>
        <TextContainer>My Bookings</TextContainer>
        <BookingsContainer>
          {<BookingRender status="pending" />}
          {<BookingRender status="cancelled" />}
          {<BookingRender status="confirmed" />}
          {<BookingRender status="pending" />}
          {<BookingRender status="cancelled" />}
        </BookingsContainer>
        <LinkContainer>
          <Link>VIEW ALL BOOKINGS</Link>
          <RightArrowIcon color={theme.colors.grey} />
        </LinkContainer>
      </Container>
    );
  }
}

export default LatestMessages;
