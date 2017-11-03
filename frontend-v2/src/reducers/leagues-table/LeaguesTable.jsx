
import { LeaguesTableActionTypes } from '../../actions/leagues-table/LeaguesTable';

const initialState = {
  isLoading: true,
  standings: [],
  matchday: '',
  leagueCaption: '',
  standingsAvailable: false,
};

const LeaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LeaguesTableActionTypes.API_SUCCESS: {
      const standingsAvailable = !!action.payload.standing;
      return {
        ...state,
        standingsAvailable,
        standings: action.payload.standing,
        matchday: action.payload.matchday,
        leagueCaption: action.payload.leagueCaption,
        isLoading: false,
      };
    }
    case LeaguesTableActionTypes.API_LOADING:
      return { ...state, isLoading: true };
    case LeaguesTableActionTypes.API_FAILED:
      return { ...state, isLoading: false, standingsAvailable: false };
    default:
      return state;
  }
};

export default LeaguesReducer;
