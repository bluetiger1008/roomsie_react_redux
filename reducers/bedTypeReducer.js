const defaultState = [
  { value: 'regular', label: 'Regular' },
  { value: 'loft', label: 'Loft' },
  { value: 'bunk_upper', label: 'Bunk Upper' },
  { value: 'bunk_lower', label: 'Bunk Lower' }
];

const bedTypeReducer = (state = defaultState, action) => {
  return state;
};

export default bedTypeReducer;
