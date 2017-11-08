import React from 'react';
import PropTypes from 'prop-types';
import { List, Loader, Dropdown } from 'semantic-ui-react';
import { history } from '../../Routes';

const LeaguesList = (props) => {
  LeaguesList.propTypes = {
    competitionsList: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onChangeYear: PropTypes.func,
    year: PropTypes.string,
  };

  const goToCompetition = (lt, fixtures, teams, id) => history.push({ pathname: '/competition', state: { lt, fixtures, teams, id } });
  const showAllLeagues = () => props.competitionsList.map((league, key) => (
// eslint-disable-next-line no-underscore-dangle
    <List.Item key={key} onClick={() => goToCompetition(league._links.leagueTable.href, league._links.fixtures.href, league._links.teams.href, league.id)}>
      <List.Icon name="game" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{league.league}</List.Header>
        <List.Description as="a">{league.caption}</List.Description>
        <List.Description as="a">{league.currentMatchday ? `Current Matchday: ${league.currentMatchday}` : `Total Matchdays: ${league.numberOfMatchdays}`}</List.Description>
      </List.Content>
    </List.Item>
    ));

  return (
    <div className="wrapper">
      <h3>List of Competitions (for Year {<Dropdown disabled={props.isLoading} onChange={props.onChangeYear} value={props.year} selection options={[{ text: '2016', value: '2016' }, { text: '2017', value: '2017' }]} />})</h3>
      {props.isLoading ? <Loader active /> : <List animated selection verticalAlign="middle" size="massive" divided relaxed>
        {showAllLeagues()}
      </List>}
    </div>
  );
};
export default LeaguesList;
