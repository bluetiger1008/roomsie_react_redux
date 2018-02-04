import { axios, getToken } from '../utils';
import { push } from 'react-router-redux';
import { LOGIN_SUCCESS } from '../types';

const verifyUser = () => dispatch => {
  if (!getToken()) {
    dispatch(push('/'));
    return Promise.resolve();
  }
  return new Promise(resolve => {
    axios()
      .get('/users/me')
      .then(response => {
        const user = response.data;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: user
        });
        resolve();
      })
      .catch(err => {
        sessionStorage.removeItem('jwtToken');
        localStorage.removeItem('jwtToken');
        dispatch(push('/logout'));
        resolve();
      });
  });
};

export default verifyUser;
