import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import { getTokenStorage } from '~/utils/storage';
import { store } from '~/store';
import { setAlertDialog } from '~/store/global';

//  `https://avl-frontend-exam.herokuapp.com/api/${subPath}`

export interface APIResponse<T = any> {
  data: T;
  message: string;
  status: boolean;
}
export default (subPath: string = '') => {
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
    (response: AxiosResponse<APIResponse, any>) => {
      checkErrorCdoe(response);
      return response;
    },
    (error) => {
      checkErrorCdoe(error.response);
      return error.response;
    }
  );

  return api;
};

export const privateApi = (subPath: string = '') => {
  const api = axios.create({
    withCredentials: true,
    baseURL: `${process.env.API_URL}${subPath}`,
    headers: { 'Content-Type': 'application/json' },
  });

  api.interceptors.request.use(
    async (config) => {
      const token = getTokenStorage();
      if (config.headers) config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response: AxiosResponse<APIResponse, any>) => {
      checkErrorCdoe(response);
      return response;
    },
    async (error) => {
      checkErrorCdoe(error.response);
      if (error.response) {
        // Access Token was expired
        if (
          error.response.status === 401 &&
          error.response.data.message === 'jwt expired'
        ) {
          const storedToken = JSON.parse(getTokenStorage());
          
          try {
            const rs = await axios.post(`${process.env.API_URL}/auth/refresh`, {
              refresh_token: storedToken.refresh_token,
            });

            const { token, user } = rs.data;

            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('user', JSON.stringify(user));

            return;
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
};

async function checkErrorCdoe(response: AxiosResponse<APIResponse, any>) {
  switch (response.data.status) {
    case false:
      store.dispatch(
        setAlertDialog({ show: true, msg: JSON.stringify(response.data) })
      );
      break;
    case true:
      break;

    default:
      break;
  }
}
