import React, { Component } from 'react';

import Div from '../../common/Div';
import WelcomeBack from './WelcomBack';
import MyBookings from './MyBookings';
import LatestMessages from './LatestMessages';
import UpcomingEvents from './UpcomingEvents';
import Statistics from './Statistics';

const Column = Div.extend`
  flex-direction: column;
`;

class MainDashboard extends Component {
  render() {
    return (
      <div>
        <WelcomeBack />
        <Div style={{ justifyContent: 'space-between' }}>
          <Column>
            <Statistics />
            <UpcomingEvents />
          </Column>
          <Column>
            <MyBookings />
            <LatestMessages />
          </Column>
        </Div>
      </div>
    );
  }
}

export default MainDashboard;
