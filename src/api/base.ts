import axios from 'axios';

//  `https://avl-frontend-exam.herokuapp.com/api/${subPath}`
const api = (subPath: string = '') => {
  const api = axios.create({
    baseURL: `${process.env.API_URL}${subPath}`,
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
  try {
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  } catch (error) {
    alert(error);
  }

  return api;
};

export default api;
