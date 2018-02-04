import React from 'react';
import { Route } from 'react-router-dom';

import MainDashboard from './MainDashboard';

const DashboardRouters = () => (
  <main>
    <Route path="/host-dashboard" component={MainDashboard} />
  </main>
);

export default DashboardRouters;
