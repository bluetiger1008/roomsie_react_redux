import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from 'actions';

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(null, mapDispatchToProps)(Logout);
