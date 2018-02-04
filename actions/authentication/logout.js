import { push } from 'react-router-redux';
import { LOGOUT } from '../types';

const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  dispatch(push('/'));
};

export default logoutUser;
