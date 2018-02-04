import { axios } from '../utils';
import {
  UPDATE_EMAIL_ERROR,
  UPDATE_EMAIL_PENDING,
  UPDATE_EMAIL_SUCCESS
} from '../types';

const updateEmail = email => dispatch => {
  dispatch({
    type: UPDATE_EMAIL_PENDING
  });
  return axios()
    .patch('/emails', { email })
    .then(res => {
      dispatch({
        type: UPDATE_EMAIL_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_EMAIL_ERROR,
        payload: err
      });
      throw err;
    });
};

export default updateEmail;
