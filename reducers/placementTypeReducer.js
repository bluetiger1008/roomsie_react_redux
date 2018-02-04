const defaultState = [
  {
    label: 'Male',
    value: 'male',
    description: 'I prefer male applicants only.'
  },
  {
    label: 'Female',
    value: 'female',
    description: 'I prefer female applicants only.'
  },
  {
    label: 'Unisex',
    value: 'unisex',
    description: 'I have no gender preference for my applicants.'
  }
];

const placementTypeReducer = (state = defaultState) => {
  return state;
};

export default placementTypeReducer;
