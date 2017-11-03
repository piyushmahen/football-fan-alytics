import { combineReducers } from 'redux';
import dashboard from './dashboard/Dashboard';
import leagues from './leagues-table/LeaguesTable';

export default combineReducers({
  dashboard,
  leagues,
});
