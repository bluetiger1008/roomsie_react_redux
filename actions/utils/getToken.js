const getToken = () => {
  let token = sessionStorage.getItem('jwtToken');
  if (!token) {
    token = localStorage.getItem('jwtToken');
  }
  return token;
};

export default getToken;
