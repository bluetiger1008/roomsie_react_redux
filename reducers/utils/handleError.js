const handleError = err => {
  if (!err.response) return;

  const description = err.description;
  if (description) {
    return err;
  }
  return { description: 'Something bad happened!!Please contact support' };
};

export default handleError;
