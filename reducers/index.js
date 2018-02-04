import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authenticationReducer from './authentication';
import modalReducer from './modalReducer';
import bedTypeReducer from './bedTypeReducer';
import propertyTypeReducer from './propertyTypeReducer';
import feeTypeReducer from './feeTypeReducer';
import bedSizeReducer from './bedSizeReducer';
import amenitiesReducer from './amenitiesReducer';
import newPropertyReducer from './listSpace';
import listingTypeReducer from './listingTypeReducer';
import placementTypeReducer from './placementTypeReducer';
import { LOGOUT } from '../actions/types';

const appReducer = combineReducers({
  router: routerReducer,
  auth: authenticationReducer,
  modals: modalReducer,
  bedTypes: bedTypeReducer,
  propertyTypes: propertyTypeReducer,
  feeTypes: feeTypeReducer,
  bedSizes: bedSizeReducer,
  amenities: amenitiesReducer,
  newProperty: newPropertyReducer,
  listingTypes: listingTypeReducer,
  placementTypes: placementTypeReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    sessionStorage.removeItem('jwtToken');
    localStorage.removeItem('jwtToken');
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
