
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCompetitionLeaguesAction } from '../../actions/dashboard/Dashboard';
import LeaguesList from '../../components/dashboard/LeaguesList';

@connect((store) => ({ dashboard: store.dashboard }))
class Dashboard extends Component {

  static propTypes = {
    dashboard: PropTypes.object,
    dispatch: PropTypes.func,
  };

  componentDidMount() {
    this.props.dispatch(getCompetitionLeaguesAction());
  }


  render() {
    return (
      <LeaguesList
        {...this.props.dashboard}
      />
    );
  }
}

export default Dashboard;
