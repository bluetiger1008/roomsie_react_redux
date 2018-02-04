import {
  OPEN_MODAL,
  CLOSE_MODAL,
  LOGIN_SUCCESS,
  ACCEPT_TERMS_SUCCESS
} from 'actions/types';

const defaultState = {};

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        [action.modal]: true
      };
    case CLOSE_MODAL:
      return {
        [action.modal]: false
      };
    case ACCEPT_TERMS_SUCCESS:
      return {
        ...state,
        provideInfo: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: false
      };
    default:
      return state;
  }
};

export default modalReducer;
