import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import { store } from '~/store';
import { setAlertDialog } from '~/store/global';

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

  api.interceptors.response.use(
    (response) => {
        checkErrorCdoe(response)
      return response;
    },
    (error) => {
        checkErrorCdoe(error.response)
      return error.response;
    }
  );

  return api;
};

export default api;

async function checkErrorCdoe(response: AxiosResponse<any, any>) {
  switch (response.data.status) {
    case 0:
      store.dispatch(
        setAlertDialog({ show: true, msg: JSON.stringify(response.data) })
      );
      break;
    case 1:
      break;

    default:
      break;
  }
}
