import axios from 'axios';

const api = (subPath: string = '') => {
  const api = axios.create({
    baseURL: `https://avl-frontend-exam.herokuapp.com/api/${subPath}`,
    headers: { 'Content-Type': 'application/json' },
  });

  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return api;
};

export default api;
