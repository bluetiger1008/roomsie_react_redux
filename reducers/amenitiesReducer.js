import { AMENITIES_FETCHED } from 'actions/types';

const defaultState = [];

const amenitiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AMENITIES_FETCHED:
      return action.payload;
    default:
      return state;
  }
};

export default amenitiesReducer;
