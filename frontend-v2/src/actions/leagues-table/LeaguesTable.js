import { getSingleCompetitionLeague } from './../../services/dashboard/Dashboard';

const LeaguesTableActionTypes = {
  GET_COMPETITION_LEAGUES: 'LEAGUES_TABLE/GET_COMPETITION_LEAGUES',
  API_FAILED: 'LEAGUES_TABLE/API_FAILED',
  API_LOADING: 'LEAGUES_TABLE/API_LOADING',
  API_SUCCESS: 'LEAGUES_TABLE/API_SUCCESS',
};

const apiFailed = () => ({ type: LeaguesTableActionTypes.API_FAILED });
const apiLoading = () => ({ type: LeaguesTableActionTypes.API_LOADING });
const apiSuccess = (payload) => ({ type: LeaguesTableActionTypes.API_SUCCESS, payload });

const getSingleCompetitionLeaguesAction = (link) => (dispatch) => {
  dispatch(apiLoading());
  getSingleCompetitionLeague(link)
  .then((data) => dispatch(apiSuccess(data)))
  .catch(() => dispatch(apiFailed()));
};

export {
  getSingleCompetitionLeaguesAction,
  LeaguesTableActionTypes,
};
