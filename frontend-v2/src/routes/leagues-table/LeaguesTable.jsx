
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSingleCompetitionLeaguesAction } from '../../actions/leagues-table/LeaguesTable';
import LeaguesStanding from '../../components/leagues-table/LeaguesStanding';

@connect((store) => ({ leagues: store.leagues }))
class Dashboard extends Component {

  static propTypes = {
    leagues: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
  };

  componentDidMount() {
    this.props.dispatch(getSingleCompetitionLeaguesAction(this.props.location.state.link));
  }

  onLeagueClick = () => {};

  render() {
    return (
      <LeaguesStanding
        {...this.props.leagues}
        onLeagueClick={this.onLeagueClick}
      />
    );
  }
}

export default Dashboard;
