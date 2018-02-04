import { axios } from '../utils';
import {
  CONFIRM_VERIFICATION_PIN_ERROR,
  CONFIRM_VERIFICATION_PIN_PENDING,
  CONFIRM_VERIFICATION_PIN_SUCCESS
} from '../types';

const confirmVerificationPIN = pin => dispatch => {
  dispatch({
    type: CONFIRM_VERIFICATION_PIN_PENDING
  });
  return axios()
    .patch('/phone_numbers/verify', { pin })
    .then(res => {
      dispatch({
        type: CONFIRM_VERIFICATION_PIN_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: CONFIRM_VERIFICATION_PIN_ERROR,
        payload: err
      });
      throw err;
    });
};

export default confirmVerificationPIN;
