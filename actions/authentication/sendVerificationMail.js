import { axios } from '../utils';
import {
  SEND_VERIFICATION_MAIL_ERROR,
  SEND_VERIFICATION_MAIL_PENDING,
  SEND_VERIFICATION_MAIL_SUCCESS
} from '../types';

const sendVerificationMail = () => dispatch => {
  dispatch({
    type: SEND_VERIFICATION_MAIL_PENDING
  });
  return axios()
    .get('/emails/resend_verification_email')
    .then(res => {
      dispatch({
        type: SEND_VERIFICATION_MAIL_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: SEND_VERIFICATION_MAIL_ERROR,
        payload: err
      });
      throw err;
    });
};

export default sendVerificationMail;
