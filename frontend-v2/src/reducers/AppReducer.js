
import { AppActionTypes } from './../actions/App';

const initialToggleState = () => true;

const initialState = {
  expanded: initialToggleState(),
  screenSizeBig: initialToggleState(),
  userData: {
    firstName: '',
    lastName: '',
    clientLogo: '',
    userProfileImage: '',
    isMulticlient: false,
    enableProducts: [],
  },
  isError: false,
  isLoading: true,
  showOnboarding: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, expanded: action.payload };
    case 'SET_SCREEN_SIZE':
      return { ...state, screenSizeBig: action.payload };
    case 'SET_USER_DATA':
      return { ...state, userData: action.payload, showOnboarding: action.payload.onboardingFlag };
    case 'SET_USER_ERROR':
      return { ...state, isError: action.error };
    case 'SET_USER_LOADING':
      return { ...state, isLoading: action.loading };
    case 'CHANGE_PROFILE_IMAGE':
      return { ...state,
        userData: {
          ...state.userData,
          userProfileImage: action.data,
        } };

    case AppActionTypes.SHOW_ONBAORDING:
      return {
        ...state,
        showOnboarding: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
