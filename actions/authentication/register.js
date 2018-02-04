import { axios } from 'actions/utils';
import { push } from 'react-router-redux';
import { SIGNUP_PENDING, LOGIN_SUCCESS, SIGNUP_ERROR } from '../types';

const registerUser = user => dispatch => {
  dispatch({
    type: SIGNUP_PENDING
  });
  return axios()
    .post('/users', user)
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
        type: SIGNUP_ERROR,
        payload: err
      });
    });
};

export default registerUser;
