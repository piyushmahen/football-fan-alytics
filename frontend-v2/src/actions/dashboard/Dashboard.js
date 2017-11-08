import { getCompetitionLeagues } from './../../services/dashboard/Dashboard';
import { setInternalPagesLoading } from '../leagues-table/LeaguesTable';

const DashboardActionTypes = {
  GET_COMPETITION_LEAGUES: 'DASHBOARD/GET_COMPETITION_LEAGUES',
  API_FAILED: 'DASHBOARD/API_FAILED',
  API_SUCCESS: 'DASHBOARD/API_SUCCESS',
  CHANGE_YEAR: 'DASHBOARD/CHANGE_YEAR',
};

const apiFailed = () => ({ type: DashboardActionTypes.API_FAILED });
const apiSuccess = (payload) => ({ type: DashboardActionTypes.API_SUCCESS, payload });
const changeYear = (payload) => ({ type: DashboardActionTypes.CHANGE_YEAR, payload });

const getCompetitionLeaguesAction = () => (dispatch, getState) => {
  const year = getState().dashboard.year;
  dispatch(setInternalPagesLoading());
  getCompetitionLeagues(year)
  .then((data) => dispatch(apiSuccess(data)))
  .catch(() => dispatch(apiFailed()));
};

export {
  getCompetitionLeaguesAction,
  changeYear,
  DashboardActionTypes,
};
