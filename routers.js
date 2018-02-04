import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verify } from 'actions';
import { Logout } from 'components/common';
import ListSpace from 'components/website/listSpace';
import GuestDashboard from 'components/application/guestDashboard/HomePage';
import HomePage from 'components/website/homepage';
import HostDashboard from 'components/application/hostDashboard';
import history from 'utils/history';
import { Router } from 'react-router-dom';

class Routers extends Component {
  constructor() {
    super();
    this.state = {
      canRender: false
    };
  }

  componentWillMount() {
    this.props.verify().then(() => {
      this.setState(() => ({
        canRender: true
      }));
    });
  }

  render() {
    const { canRender } = this.state;
    if (!canRender) return null;
    return (
      <main>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/logout" component={Logout} />
            <Route path="/list-space" component={ListSpace} />
            <Route path="/dashboard" component={GuestDashboard} />
            <Route path="/host-dashboard" component={HostDashboard} />
          </Switch>
        </Router>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ verify }, dispatch);

export default connect(null, mapDispatchToProps)(Routers);
