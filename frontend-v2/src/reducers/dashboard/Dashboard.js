
import { DashboardActionTypes } from '../../actions/dashboard/Dashboard';

const initialState = {
  isLoading: true,
  competitionsList: [],
  year: '2016',
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DashboardActionTypes.API_SUCCESS:
      return {
        ...state,
        competitionsList: action.payload,
        isLoading: false,
      };
    case DashboardActionTypes.CHANGE_YEAR:
      return {
        ...state,
        year: action.payload,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
