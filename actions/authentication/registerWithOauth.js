import { axios, authorizeOauthProvider } from 'actions/utils';
import { push } from 'react-router-redux';
import { LOGIN_SUCCESS, SIGNUP_ERROR, OAUTH_SIGNUP_INCOMPLETE } from '../types';

const registerWithOauth = provider => dispatch => {
  const afterAuthorization = ({ code }) => {
    return axios()
      .post('/oauth_users', { code, provider })
      .then(response => {
        const { token, user } = response.data;

        if (response.status === 201) {
          sessionStorage.setItem('jwtToken', token);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: user
          });
          dispatch(push('/'));
        } else {
          dispatch({
            type: OAUTH_SIGNUP_INCOMPLETE,
            payload: { user, token }
          });
        }
      })
      .catch(err => {
        dispatch({
          type: SIGNUP_ERROR,
          payload: err
        });
      });
  };

  authorizeOauthProvider(provider, afterAuthorization);
};

export default registerWithOauth;
