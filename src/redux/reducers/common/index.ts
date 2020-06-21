import {
  APP_LOAD,
  REDIRECT,
  SIGN_OUT,
  SIGN_IN,
  SIGN_UP,
  SET_CURRENT_USER,
  CHANGE_DRAWER_STATUS,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from './constants';
import firestoreQueries from '../../../firebase/firestoreQueries';
import agent from '../../../agent';

const defaultState = {
  appLoaded: false,
  token: null,
  currentUser: null,
  snackStatus: false,
  snackType: null,
  snackMessage: null,
  error: false,
  redirectTo: '/',
  isLoading: false,
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
      };
    case SET_CURRENT_USER:
      if (action.payload) {
        agent.setToken(action.payload.token);
        firestoreQueries.setCurrentUser(action.payload);
      }
      return {
        ...state,
        currentUser: action.payload,
        token: action.payload ? action.payload.token : null,
      };
    case REDIRECT:
      return { ...state, redirectTo: action.redirectTo };
    case SIGN_OUT:
      return {
        ...state,
        redirectTo: '/',
        token: null,
        currentUser: null,
      };
    case SIGN_UP:
      return {
        ...state,
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user,
      };
    case SIGN_IN:
      return {
        ...state,
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user,
      };
    case CLOSE_SNACKBAR:
      return { ...state, snackStatus: false };
    case CHANGE_DRAWER_STATUS:
      return {
        ...state,
        drawerStatus: action.payload,
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackStatus: true,
        snackType: action.payload.type,
        snackMessage: action.payload.message,
      };
    case '@@router/LOCATION_CHANGE':
      return { ...state, redirectTo: action.payload.location.pathName };
    default:
      return state;
  }
};
