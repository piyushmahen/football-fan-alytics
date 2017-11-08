
import { LeaguesTableActionTypes } from '../../actions/leagues-table/LeaguesTable';

const initialState = {
  isLoading: true,
  isLoadingStandings: true,
  isLoadingFixtures: true,
  isLoadingTeams: true,
  standings: [],
  fixtures: {},
  teams: [],
  teamsCount: 0,
  fixturesCount: 0,
  matchday: '',
  leagueCaption: '',
  selectedGameWeek: '',
};

const LeaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LeaguesTableActionTypes.API_SUCCESS_STANDINGS: {
      let standings = action.payload.data.standing;
      if (action.payload.data.standings) {
        let arr = [];
        Object.keys(action.payload.data.standings).forEach((group) => (arr = [...arr, ...action.payload.data.standings[group]]));
        standings = arr;
      }
      return {
        ...state,
        standings,
        matchday: action.payload.data.matchday,
        leagueCaption: action.payload.data.leagueCaption,
        isLoading: false,
        isLoadingStandings: false,
      };
    }
    case LeaguesTableActionTypes.API_SUCCESS_FIXTURES: {
      const fixtures = action.payload.data.fixtures.reduce((r, a) => {
        const x = r;
        x[a.matchday] = x[a.matchday] || [];
        x[a.matchday].push(a);
        return x;
      }, Object.create(null));
      const selectedGameWeek = Object.keys(fixtures)[0];
      return {
        ...state,
        fixtures,
        fixturesCount: action.payload.data.count,
        isLoading: false,
        isLoadingFixtures: false,
        selectedGameWeek,
      };
    }
    case LeaguesTableActionTypes.API_SUCCESS_TEAMS: {
      const teams = action.payload.data.teams.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : 1;
      });
      return {
        ...state,
        teams,
        teamsCount: action.payload.data.count,
        isLoading: false,
        isLoadingTeams: false,
      };
    }
    case LeaguesTableActionTypes.SET_INTERNAL_PAGES_LOADING:
      return { ...state, isLoading: true, tabSelected: 'lt', isLoadingStandings: true, isLoadingFixtures: true, isLoadingTeams: true };
    case LeaguesTableActionTypes.API_LOADING_AND_TAB:
      return { ...state, isLoading: true, tabSelected: action.payload };
    case LeaguesTableActionTypes.SELECT_WEEK_NAME:
      return { ...state, selectedGameWeek: action.payload };
    case LeaguesTableActionTypes.API_FAILED: {
      let key;
      if (action.payload === 'lt') {
        key = 'isLoadingStandings';
      } else if (action.payload === 'fixtures') {
        key = 'isLoadingFixtures';
      } else if (action.payload === 'teams') {
        key = 'isLoadingTeams';
      }
      return { ...state, isLoading: false, standingsAvailable: false, [key]: false };
    }
    default:
      return state;
  }
};

export default LeaguesReducer;
