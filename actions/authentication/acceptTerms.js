import { axios } from '../utils';
import {
  ACCEPT_TERMS_ERROR,
  ACCEPT_TERMS_PENDING,
  ACCEPT_TERMS_SUCCESS
} from '../types';

const acceptTerms = () => dispatch => {
  dispatch({
    type: ACCEPT_TERMS_PENDING
  });
  return axios()
    .post('/terms/accept')
    .then(res => {
      dispatch({
        type: ACCEPT_TERMS_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: ACCEPT_TERMS_ERROR,
        payload: err
      });
      throw err;
    });
};

export default acceptTerms;
