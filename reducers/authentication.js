import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_PENDING,
  SIGNUP_ERROR,
  ACCEPT_TERMS_ERROR,
  ACCEPT_TERMS_SUCCESS,
  ACCEPT_TERMS_PENDING,
  OAUTH_SIGNUP_INCOMPLETE,
  SEND_VERIFICATION_PIN_ERROR,
  CONFIRM_VERIFICATION_PIN_SUCCESS,
  CONFIRM_VERIFICATION_PIN_ERROR,
  UPDATE_EMAIL_ERROR,
  UPDATE_EMAIL_SUCCESS
} from 'actions/types';
import { handleError } from './utils';

const defaultState = {
  authenticated: false,
  authorized: false,
  registrationComplete: false,
  termsAccepted: false,
  phoneNumberVerified: false,
  emailVerified: false,
  user: {},
  pending: false,
  loginError: false,
  signupError: false,
  phoneNumberError: false,
  pinError: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
    case ACCEPT_TERMS_PENDING:
    case SIGNUP_PENDING:
      return {
        ...state,
        pending: true
      };
    case LOGIN_SUCCESS: {
      const {
        termsAccepted,
        emailVerified,
        phoneNumberVerified
      } = action.payload;
      return {
        ...state,
        authenticated: true,
        loginError: false,
        signupError: false,
        pending: false,
        termsAccepted,
        phoneNumberVerified,
        emailVerified,
        authorized: termsAccepted,
        registrationComplete:
          termsAccepted && phoneNumberVerified && emailVerified,
        user: action.payload
      };
    }
    case ACCEPT_TERMS_SUCCESS:
      return {
        ...state,
        pending: false,
        termsAccepted: true,
        authorized: state.authenticated
      };
    case CONFIRM_VERIFICATION_PIN_SUCCESS: {
      const { termsAccepted, emailVerified } = state;
      return {
        ...state,
        pending: false,
        phoneNumberVerified: true,
        registrationComplete: termsAccepted && emailVerified
      };
    }
    case UPDATE_EMAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        emailError: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        pending: false,
        loginError: handleError(action.payload)
      };
    case CONFIRM_VERIFICATION_PIN_ERROR:
      return {
        ...state,
        pending: false,
        phoneNumberVerified: false,
        registrationComplete: false,
        pinError: handleError(action.payload)
      };
    case SEND_VERIFICATION_PIN_ERROR:
      return {
        ...state,
        pending: false,
        phoneNumberVerified: false,
        registrationComplete: false,
        phoneNumberError: handleError(action.payload)
      };
    case UPDATE_EMAIL_ERROR:
      return {
        ...state,
        pending: false,
        emailError: handleError(action.payload)
      };
    case ACCEPT_TERMS_ERROR:
      return {
        ...state,
        pending: false,
        termsAccepted: false,
        authorized: false
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        pending: false,
        signupError: handleError(action.payload)
      };
    case OAUTH_SIGNUP_INCOMPLETE: {
      const { user, token } = action.payload;
      user.oauthToken = token;
      return {
        ...state,
        pending: false,
        signupError: handleError(action.payload),
        warning:
          'Please enter the missing information to complete registration',
        user
      };
    }
    default:
      return state;
  }
};

export default authReducer;
