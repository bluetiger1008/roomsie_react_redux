import { get } from 'lodash';

const handleError = err => {
  if (!err) return;
  const error = get(err, ['response', 'error']);

  if (!error) {
    return { description: 'Something bad happened!! Please contact support' };
  }
  return error;
};

export default handleError;
