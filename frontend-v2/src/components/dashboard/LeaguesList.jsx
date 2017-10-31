import React from 'react';
import PropTypes from 'prop-types';
import { List, Loader } from 'semantic-ui-react';

const LeaguesList = (props) => {
  LeaguesList.propTypes = {
    competitionsList: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onLeagueClick: PropTypes.func.isRequired,
  };
  const leagueOnClick = (link) => props.onLeagueClick(link);
  const showAllLeagues = () => props.competitionsList.map((league, key) => (
// eslint-disable-next-line no-underscore-dangle
    <List.Item key={key} onClick={() => leagueOnClick(league._links.fixtures.href)}>
      <List.Icon name="game" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{league.league}</List.Header>
        <List.Description as="a">{league.caption}</List.Description>
        <List.Description as="a">{league.currentMatchday ? `Current Matchday: ${league.currentMatchday}` : `Total Matchdays: ${league.numberOfMatchdays}`}</List.Description>
      </List.Content>
    </List.Item>
    ));

  if (props.isLoading) {
    return (
      <div className="wrapper">
        <Loader active />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <List size="massive" divided relaxed>
        {showAllLeagues()}
      </List>
    </div>
  );
};
export default LeaguesList;
