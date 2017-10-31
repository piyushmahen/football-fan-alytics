import { combineReducers } from 'redux';
import dashboard from './dashboard/Dashboard';
import app from './AppReducer';

export default combineReducers({
  app,
  dashboard,
});
