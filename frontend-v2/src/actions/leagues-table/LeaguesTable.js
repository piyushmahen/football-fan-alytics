import { getSingleCompetitionLeague } from './../../services/dashboard/Dashboard';

const LeaguesTableActionTypes = {
  GET_COMPETITION_LEAGUES: 'LEAGUES_TABLE/GET_COMPETITION_LEAGUES',
  API_FAILED: 'LEAGUES_TABLE/API_FAILED',
  API_LOADING_AND_TAB: 'LEAGUES_TABLE/API_LOADING_AND_TAB',
  API_SUCCESS_STANDINGS: 'LEAGUES_TABLE/API_SUCCESS_STANDINGS',
  API_SUCCESS_FIXTURES: 'LEAGUES_TABLE/API_SUCCESS_FIXTURES',
  API_SUCCESS_TEAMS: 'LEAGUES_TABLE/API_SUCCESS_TEAMS',
  SELECT_WEEK_NAME: 'LEAGUES_TABLE/SELECT_WEEK_NAME',
  SET_TAB: 'LEAGUES_TABLE/SET_TAB',
  SET_INTERNAL_PAGES_LOADING: 'LEAGUES_TABLE/SET_INTERNAL_PAGES_LOADING',
};

const apiFailed = () => ({ type: LeaguesTableActionTypes.API_FAILED });
const apiLoadingAndTab = (payload) => ({ type: LeaguesTableActionTypes.API_LOADING_AND_TAB, payload });
const apiSuccessStandings = (payload) => ({ type: LeaguesTableActionTypes.API_SUCCESS_STANDINGS, payload });
const apiSuccessFixtures = (payload) => ({ type: LeaguesTableActionTypes.API_SUCCESS_FIXTURES, payload });
const apiSuccessTeams = (payload) => ({ type: LeaguesTableActionTypes.API_SUCCESS_TEAMS, payload });
const selectWeekName = (payload) => ({ type: LeaguesTableActionTypes.SELECT_WEEK_NAME, payload });
const setInternalPagesLoading = () => ({ type: LeaguesTableActionTypes.SET_INTERNAL_PAGES_LOADING });

const getSingleCompetitionLeaguesAction = (link, tabSelected) => (dispatch) => {
  dispatch(apiLoadingAndTab(tabSelected));
  getSingleCompetitionLeague(link)
  .then((data) => {
    if (tabSelected === 'lt') {
      dispatch(apiSuccessStandings({ data, tabSelected }));
    } else if (tabSelected === 'fixtures') {
      dispatch(apiSuccessFixtures({ data, tabSelected }));
    } else if (tabSelected === 'teams') {
      dispatch(apiSuccessTeams({ data, tabSelected }));
    }
  })
  .catch(() => dispatch(apiFailed(tabSelected)));
};

export {
  getSingleCompetitionLeaguesAction,
  selectWeekName,
  setInternalPagesLoading,
  LeaguesTableActionTypes,
};
