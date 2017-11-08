import React from 'react';
import PropTypes from 'prop-types';
import { List, Loader, Image, Statistic, Grid } from 'semantic-ui-react';

const LeaguesStanding = (props) => {
  LeaguesStanding.propTypes = {
    standings: PropTypes.array.isRequired,
    isLoadingStandings: PropTypes.bool.isRequired,
    onLeagueClick: PropTypes.func.isRequired,
  };
  const showAllTeams = () => props.standings.map((team, key) => (
// eslint-disable-next-line no-underscore-dangle
    <List.Item key={key}>
      <Grid>
        <Grid.Column computer={3} mobile={8}>
          <Statistic size="tiny">
            <Statistic.Label>Position</Statistic.Label>
            <Statistic.Value>{team.position}</Statistic.Value>
          </Statistic>
          <Image avatar src={team.crestURI} floated={'right'} />
        </Grid.Column>
        <Grid.Column computer={3} mobile={8}>
          <List.Description>{team.teamName || team.team}</List.Description>
        </Grid.Column>
        <Grid.Column computer={2} mobile={5}>
          <Statistic size="tiny">
            <Statistic.Label>Points</Statistic.Label>
            <Statistic.Value>{team.points}</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer={2} mobile={5}>
          <Statistic size="tiny">
            <Statistic.Label>Total Played</Statistic.Label>
            <Statistic.Value>{team.playedGames}</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer={2} mobile={5}>
          <Statistic size="tiny">
            <Statistic.Label>Wins</Statistic.Label>
            <Statistic.Value>{team.wins}</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer={2} mobile={5}>
          <Statistic size="tiny">
            <Statistic.Label>Losses</Statistic.Label>
            <Statistic.Value>{team.losses}</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer={2} mobile={5}>
          <Statistic size="tiny">
            <Statistic.Label>Goals Diff</Statistic.Label>
            <Statistic.Value>{team.goalDifference}</Statistic.Value>
          </Statistic>
        </Grid.Column>
      </Grid>
    </List.Item>
  ));

  if (props.isLoadingStandings) {
    return (
      <div className="wrapper">
        <Loader active />
      </div>
    );
  }

  return (
    <List size="massive" divided relaxed>
      {showAllTeams()}
    </List>
  );
};
export default LeaguesStanding;
