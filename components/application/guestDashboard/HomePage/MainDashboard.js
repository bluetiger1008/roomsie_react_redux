import React, { Component } from 'react';

import Div from 'components/common/Div';
import WelcomeBack from './WelcomBack';
import MyRoomies from './MyRoomies';
import LatestMessages from './LatestMessages';
import UpcomingEvents from './UpcomingEvents';
import GroupsYouMightLike from './GroupsYouMightLike';
import RecentActivities from './RecentActivities';

const Column = Div.extend`
  flex-direction: column;
`;

class MainDashboard extends Component {
  render() {
    return (
      <div>
        <WelcomeBack />
        <Div>
          <Column>
            <MyRoomies />
            <LatestMessages />
            <Div>
              <UpcomingEvents />
              <GroupsYouMightLike />
            </Div>
          </Column>
          <RecentActivities />
        </Div>
      </div>
    );
  }
}

export default MainDashboard;
