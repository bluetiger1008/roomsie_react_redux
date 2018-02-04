const defaultState = [
  { value: 'cleaning', label: 'Cleaning' },
  { value: 'parking', label: 'Parking' },
  { value: 'pets', label: 'Pets' },
  { value: 'security_deposit', label: 'Security Deposit' }
];

const feeTypeReducer = (state = defaultState, action) => {
  return state;
};

export default feeTypeReducer;
