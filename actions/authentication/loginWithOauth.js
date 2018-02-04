import { axios, authorizeOauthProvider } from 'actions/utils';
import { push } from 'react-router-redux';
import { LOGIN_SUCCESS, LOGIN_PENDING, LOGIN_ERROR } from '../types';

const getLoginScope = provider => {
  switch (provider) {
    case 'facebook': {
      return 'public_profile';
    }
    case 'google': {
      return 'profile';
    }
  }
};

const loginWithOauth = provider => dispatch => {
  dispatch({
    type: LOGIN_PENDING
  });

  const afterAuthorization = ({ code }) => {
    return axios()
      .post('/session', { provider, code })
      .then(response => {
        const { token, user } = response.data;

        sessionStorage.setItem('jwtToken', token);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: user
        });
        dispatch(push('/'));
      })
      .catch(err => {
        dispatch({
          type: LOGIN_ERROR,
          payload: err
        });
        throw err;
      });
  };

  const scope = getLoginScope(provider);

  authorizeOauthProvider(provider, afterAuthorization, scope);
};

export default loginWithOauth;
