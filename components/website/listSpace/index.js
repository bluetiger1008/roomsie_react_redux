import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetNewProperty } from 'actions/listSpace';

import { Header } from 'components/common';
import PropertyBasics from './PropertyBasics';
import RatesAndFees from './RatesAndFees/index';
import AmenitiesAndRules from './amenitiesAndRules';
import DatesAvailability from './DatesAvailability';
import LocationAndPhotos from './LocationAndPhotos';

const confirmationMessage = 'Changes that you made may not be saved.';

class ListSpace extends Component {
  onUnload(event) {
    event.returnValue = confirmationMessage;
    return confirmationMessage;
  }

  warnBeforeLeaving() {
    this.unblock = this.props.history.block(location => {
      if (!location.pathname.includes('/list-space')) {
        return `Are you sure you want to leave this page?\n\n${confirmationMessage}`;
      }
    });
  }

  componentDidMount() {
    this.warnBeforeLeaving();
    window.addEventListener('beforeunload', this.onUnload);
  }

  componentWillUnmount() {
    this.unblock();
    this.props.resetNewProperty();
    window.removeEventListener('beforeunload', this.onUnload);
  }

  render() {
    const path = this.props.match.path;
    return (
      <div>
        <Header />
        <Route path={`${path}/property-basics`} component={PropertyBasics} />
        <Route path={`${path}/rates-and-fees`} component={RatesAndFees} />
        <Route
          path={`${path}/amenities-and-rules`}
          component={AmenitiesAndRules}
        />
        <Route
          path={`${path}/dates-availability`}
          component={DatesAvailability}
        />
        <Route
          path={`${path}/location-and-photos`}
          component={LocationAndPhotos}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { resetNewProperty };

export default connect(null, mapDispatchToProps)(ListSpace);
