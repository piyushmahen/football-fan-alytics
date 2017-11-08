import React from 'react';
import PropTypes from 'prop-types';
import { List, Loader, Image, Grid } from 'semantic-ui-react';

const LeaguesTeams = (props) => {
  LeaguesTeams.propTypes = {
    teams: PropTypes.array.isRequired,
    isLoadingTeams: PropTypes.bool.isRequired,
    onLeagueClick: PropTypes.func.isRequired,
    selectMatchWeek: PropTypes.func.isRequired,
    selectedGameWeek: PropTypes.string,
  };

  const showAllTeams = () => props.teams.map((team, key) => (
    <List.Item key={key}>
      <Grid>
        <Grid.Column computer={8} mobile={16}>
          <Image avatar src={team.crestUrl} floated={'left'} />
          <List.Description>{team.name || team.team}</List.Description>
        </Grid.Column>
      </Grid>
    </List.Item>
    ));

  if (props.isLoadingTeams) {
    return (
      <div className="wrapper">
        <Loader active />
      </div>
    );
  }

  if (props.teams.length === 0) {
    return (
      <div>
        <h4>Sorry, Teams information not available for this competition.</h4>
      </div>
    );
  }

  return (
    <Grid>
      <Grid.Column width={16}>
        <h3>List of Teams (Arranged Alphabetically)</h3>
      </Grid.Column>
      <Grid.Column width={16}>
        <List animated verticalAlign="middle" size="massive" divided relaxed>
          {showAllTeams()}
        </List>
      </Grid.Column>
    </Grid>
  );
};
export default LeaguesTeams;
