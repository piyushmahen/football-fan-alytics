import React from 'react';
import PropTypes from 'prop-types';
import { List, Loader, Label, Grid } from 'semantic-ui-react';
import moment from 'moment';

const LeaguesFixtures = (props) => {
  LeaguesFixtures.propTypes = {
    fixtures: PropTypes.object.isRequired,
    isLoadingFixtures: PropTypes.bool.isRequired,
    onLeagueClick: PropTypes.func.isRequired,
    selectMatchWeek: PropTypes.func.isRequired,
    selectedGameWeek: PropTypes.string,
  };
  const getListOfTeams = (currentDateList) => currentDateList.map((match, key) => (
    <List.Item key={key}>
      <Grid centered textAlign="center">
        <Grid.Column textAlign="center" computer={7} mobile={16}>
          {match.homeTeamName}
        </Grid.Column>

        <Grid.Column textAlign="center" computer={2} mobile={16}>
          vs
        </Grid.Column>

        <Grid.Column textAlign="center" computer={7} mobile={16}>
          {match.awayTeamName}
        </Grid.Column>
      </Grid>
    </List.Item>
  ));

  const showAllMatchweeks = () => Object.keys(props.fixtures).map((matchWeek, key) =>
    (
      <Label active={matchWeek === props.selectedGameWeek} as="a" key={key} onClick={() => props.selectMatchWeek(matchWeek)}>{matchWeek}</Label>
    ));

  const showAllTeams = () => {
    const sortedByDate = props.fixtures[props.selectedGameWeek].reduce((r, a) => {
      const x = r;
      const dateObject = `${new Date(a.date).getDate()}-${new Date(a.date).getMonth()}-${new Date(a.date).getFullYear()}`;
      x[dateObject] = x[dateObject] || [];
      x[dateObject].push(a);
      return x;
    }, Object.create(null));

    return Object.keys(sortedByDate).map((date) => (
      <Grid.Column width={16} key={date}>
        <List size="massive" divided relaxed>
          {
          [
            <List.Item key={date}>{moment(date, 'DD-MM-YYYY').format('dddd, MMMM Do YYYY')}</List.Item>,
            ...getListOfTeams(sortedByDate[date]),
          ]
        }
        </List>
      </Grid.Column>
  ));
  };

  if (props.isLoadingFixtures) {
    return (
      <div className="wrapper">
        <Loader active />
      </div>
    );
  }

  if (props.fixtures.length === 0) {
    return (
      <div>
        <h4>Sorry, Grouped standings are currently not supported / No League Table for this competition.</h4>
      </div>
    );
  }

  return (
    <Grid>
      <Grid.Column width={16}>
        Please select a Matchweek
      </Grid.Column>
      <Grid.Column width={16}>
        {showAllMatchweeks()}
      </Grid.Column>
      {showAllTeams()}
    </Grid>
  );
};
export default LeaguesFixtures;
