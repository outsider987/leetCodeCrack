import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import { getTokenStorage,setTokenStorage } from '~/utils/storage';
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
    // withCredentials: true,
    baseURL: `${process.env.API_URL}${subPath}`,
    headers: { 'Content-Type': 'application/json' },
  });

  api.interceptors.request.use(
    async (config) => {
      const token = getTokenStorage();
      if (config.headers) config.headers.authorization = `Bearer ${token.accessToken}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    async (response: AxiosResponse<APIResponse, any>) => {
      checkErrorCdoe(response);
      return response;
    },
    async (error) => {
        console.log(error);
      checkErrorCdoe(error.response);
      if (error.response) {
        // Access Token was expired
        if (
          error.response.status === 401 
        ) {
          const storedToken = getTokenStorage();
          
          try {
            console.log(storedToken);
            const rs = await axios.post(`${process.env.API_URL}auth/refresh`, {
              refresh_token: storedToken.refresh_token,
              
            },{headers:{authorization:`Bearer ${storedToken.refreshToken}`}});
            checkErrorCdoe(rs);
            setTokenStorage(rs.data.data)
            return rs;
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
