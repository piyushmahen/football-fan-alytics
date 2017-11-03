import React from 'react';
import PropTypes from 'prop-types';
import { List, Loader, Image, Statistic, Grid } from 'semantic-ui-react';
import { Link } from 'react-router';

import { history } from '../../Routes';

const LeaguesStanding = (props) => {
  LeaguesStanding.propTypes = {
    standings: PropTypes.array.isRequired,
    standingsAvailable: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
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
          <List.Description as="a">{team.teamName}</List.Description>
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

  if (props.isLoading) {
    return (
      <div className="wrapper">
        <Loader active />
      </div>
    );
  }

  if (!props.standingsAvailable) {
    return (
      <div className="wrapper">
        <h4>Sorry, Grouped standings are currently not supported / No League Table fot this competition.</h4>
        <Link to="/"><h3>Go Back</h3></Link>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <List size="massive" divided relaxed>
        {showAllTeams()}
      </List>
    </div>
  );
};
export default LeaguesStanding;
