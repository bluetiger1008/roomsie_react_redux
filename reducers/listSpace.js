import { STORE_NEW_PROPERTY, RESET_NEW_PROPERTY } from 'actions/types';

const defaultState = {
  propertyTitle: '',
  propertyDescription: '',
  listingType: 'entire_space',
  placementType: 'unisex',
  propertyType: null,
  bedroomCount: 1,
  bathroomCount: 1,
  accommodates: 1,
  sessions: [],
  blackoutDates: [],
  fees: [],
  bedrooms: [
    {
      index: 0,
      bathroomType: '',
      settings: [],
      beds: []
    }
  ]
};

const newPropertyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STORE_NEW_PROPERTY: {
      const newPropertyProps = action.payload;
      return {
        ...state,
        ...newPropertyProps
      };
    }
    case RESET_NEW_PROPERTY:
      return {
        ...defaultState
      };
    default: {
      return state;
    }
  }
};

export default newPropertyReducer;
