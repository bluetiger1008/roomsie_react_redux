const defaultState = [
  { value: 'detached_home', label: 'Detached Home' },
  { value: 'historic_row_home', label: 'Historic Row Home' },
  { value: 'townhome', label: 'Townhome' },
  { value: 'condominium', label: 'Condominium' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'luxury_apartment', label: 'Luxury Apartment' },
  { value: 'basement_apartment', label: 'Basement Apartment' },
  { value: 'studio_apartment', label: 'Studio Apartment' },
  { value: 'dormitory', label: 'Dormitory' }
];

const propertyTypeReducer = (state = defaultState, action) => {
  return state;
};

export default propertyTypeReducer;
