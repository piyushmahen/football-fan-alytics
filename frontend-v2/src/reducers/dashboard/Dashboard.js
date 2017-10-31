
import { DashboardActionTypes } from '../../actions/dashboard/Dashboard';

const initialState = {
  isLoading: true,
  competitionsList: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DashboardActionTypes.API_SUCCESS:
      return {
        ...state,
        competitionsList: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
