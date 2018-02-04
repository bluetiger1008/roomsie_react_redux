import axios from 'axios';
import getToken from './getToken';
import humps from 'humps';

export default () => {
  const token = getToken();
  const config = {
    baseURL: '/api/v1',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    transformRequest: [
      data => {
        if (data) {
          return JSON.stringify(humps.decamelizeKeys(data));
        }
        return data;
      }
    ],
    transformResponse: [
      data => {
        if (data) {
          return humps.camelizeKeys(JSON.parse(data));
        }
        return data;
      }
    ]
  };

  let instance = axios.create(config);

  instance.interceptors.response.use(
    response => {
      const data = response.data;
      response.data = data.data;
      response.meta = data.meta;
      return response;
    },
    error => {
      if (error.response) {
        const responseError = error.response.data.error;
        error.code = responseError.code;
        error.description = responseError.description;
        error.details = responseError.details;
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
