const defaultState = [
  { value: 'twin', label: 'Twin' },
  { value: 'twin_xl', label: 'Twin XL' },
  { value: 'full', label: 'Full' },
  { value: 'queen', label: 'Queen' },
  { value: 'king', label: 'King' },
  { value: 'ca_king', label: 'CA King' }
];

const bedSizeReducer = (state = defaultState, action) => {
  return state;
};

export default bedSizeReducer;
