import { STORE_NEW_PROPERTY, RESET_NEW_PROPERTY } from 'actions/types';
import { push } from 'react-router-redux';

export const storeNewProperty = ({ newPropertyProps, nextUrl }) => dispatch => {
  dispatch({
    type: STORE_NEW_PROPERTY,
    payload: newPropertyProps
  });

  dispatch(push(nextUrl));
};

export const resetNewProperty = () => dispatch => {
  dispatch({
    type: RESET_NEW_PROPERTY
  });
};

export default { storeNewProperty, resetNewProperty };
