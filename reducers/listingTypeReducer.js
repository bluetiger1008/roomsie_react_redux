const defaultState = [
  {
    label: 'Entire Space',
    value: 'entire_space',
    description: 'Listings where you have the entire home/unit to yourself'
  },
  {
    value: 'shared',
    label: 'Shared',
    description:
      'Listings where the property/unit is occupied entirely by Roomsie guests'
  },
  {
    value: 'hosted',
    label: 'Hosted',
    description: 'Listings where the owner/host lives on premises'
  }
];

const listingTypeReducer = (state = defaultState) => {
  return state;
};

export default listingTypeReducer;
