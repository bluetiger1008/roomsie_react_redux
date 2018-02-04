import { axios } from 'actions/utils';
import { UNKNOWN_ERROR, AMENITIES_FETCHED } from 'actions/types';

const fetchAmenities = () => dispatch => {
  return axios()
    .get('/amenities')
    .then(response => {
      dispatch({
        type: AMENITIES_FETCHED,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: UNKNOWN_ERROR,
        payload: err
      });
    });
};

export default fetchAmenities;
