import React from 'react';
import { Route } from 'react-router-dom';

import styled from 'styled-components';
import MainDashboard from './MainDashboard';
import MessageInbox from 'components/application/guestDashboard/Messages/Inbox/index';
import MessageDetail from 'components/application/guestDashboard/Messages/Detail/index';

const Content = styled.div``;

const DashboardRouters = () => (
  <Content>
    <Route exact path="/dashboard" component={MainDashboard} />
    <Route path="/dashboard/messages" component={MessageInbox} />
    <Route path="/dashboard/message-detail" component={MessageDetail} />
  </Content>
);

export default DashboardRouters;
