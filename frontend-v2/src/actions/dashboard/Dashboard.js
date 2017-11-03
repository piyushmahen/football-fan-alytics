import { getCompetitionLeagues } from './../../services/dashboard/Dashboard';

const DashboardActionTypes = {
  GET_COMPETITION_LEAGUES: 'DASHBOARD/GET_COMPETITION_LEAGUES',
  API_FAILED: 'DASHBOARD/API_FAILED',
  API_SUCCESS: 'DASHBOARD/API_SUCCESS',
};

const apiFailed = () => ({ type: DashboardActionTypes.API_FAILED });
const apiSuccess = (payload) => ({ type: DashboardActionTypes.API_SUCCESS, payload });

const getCompetitionLeaguesAction = () => (dispatch) => {
  getCompetitionLeagues()
  .then((data) => dispatch(apiSuccess(data)))
  .catch(() => dispatch(apiFailed()));
};

export {
  getCompetitionLeaguesAction,
  DashboardActionTypes,
};
