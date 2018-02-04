import { axios } from '../utils';
import {
  SEND_VERIFICATION_PIN_ERROR,
  SEND_VERIFICATION_PIN_PENDING,
  SEND_VERIFICATION_PIN_SUCCESS
} from '../types';

const sendVerificationPIN = phone_number => dispatch => {
  dispatch({
    type: SEND_VERIFICATION_PIN_PENDING
  });
  return axios()
    .patch('/phone_numbers', { phone_number })
    .then(res => {
      dispatch({
        type: SEND_VERIFICATION_PIN_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: SEND_VERIFICATION_PIN_ERROR,
        payload: err
      });
      throw err;
    });
};

export default sendVerificationPIN;
