
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';

import { history } from '../../Routes';
import { getSingleCompetitionLeaguesAction, selectWeekName } from '../../actions/leagues-table/LeaguesTable';
import LeaguesStanding from '../../components/leagues-table/LeaguesStanding';
import LeaguesFixtures from '../../components/leagues-table/LeaguesFixtures';
import LeaguesTeams from '../../components/leagues-table/LeaguesTeams';

@connect((store) => ({ leagues: store.leagues }))
class Dashboard extends Component {

  static propTypes = {
    leagues: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
  };

  componentDidMount() {
    this.props.dispatch(getSingleCompetitionLeaguesAction(this.props.location.state.lt, 'lt'));
  }

  onSelectTab = (tabName) => {
    this.props.dispatch(getSingleCompetitionLeaguesAction(this.props.location.state[tabName], tabName));
  };

  onSelectMatchWeek = (weekName) => {
    this.props.dispatch(selectWeekName(weekName));
  };

  onLeagueClick = () => {};

  render() {
    return (
      <div className="wrapper">
        <Menu fluid size="mini" pointing>
          <Menu.Item><Button content="Go Back" onClick={() => history.push('/')} /></Menu.Item>
          <Menu.Item active={this.props.leagues.tabSelected === 'lt'} name="League table" onClick={() => this.onSelectTab('lt')} />
          <Menu.Item active={this.props.leagues.tabSelected === 'fixtures'} name="Fixtures" onClick={() => this.onSelectTab('fixtures')} />
          <Menu.Item active={this.props.leagues.tabSelected === 'teams'} name="Teams" onClick={() => this.onSelectTab('teams')} />
        </Menu>
        {this.props.leagues.tabSelected === 'lt' && <LeaguesStanding
          {...this.props.leagues}
          onLeagueClick={this.onLeagueClick}
        />}
        {this.props.leagues.tabSelected === 'fixtures' && <LeaguesFixtures
          {...this.props.leagues}
          onLeagueClick={this.onLeagueClick}
          selectMatchWeek={this.onSelectMatchWeek}
        />}
        {this.props.leagues.tabSelected === 'teams' && <LeaguesTeams
          {...this.props.leagues}
          onLeagueClick={this.onLeagueClick}
          selectMatchWeek={this.onSelectMatchWeek}
        />}
      </div>
    );
  }
}

export default Dashboard;
