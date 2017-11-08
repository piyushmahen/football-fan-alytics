
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCompetitionLeaguesAction, changeYear } from '../../actions/dashboard/Dashboard';
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

  onChangeYear = (e, { value }) => {
    this.props.dispatch(changeYear(value));
    this.props.dispatch(getCompetitionLeaguesAction());
  };


  render() {
    return (
      <LeaguesList
        {...this.props.dashboard}
        onChangeYear={this.onChangeYear}
      />
    );
  }
}

export default Dashboard;
