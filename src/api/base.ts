import axios, { AxiosError, AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import { cleanTokenStorage, getTokenStorage, setTokenStorage } from '~/utils/storage';
import { store } from '~/store';
import { setAlertDialog } from '~/store/global';

export interface APIResponse<T = any> {
  data?: T;
  message?: string;
  status?: boolean;
}
export interface APIEorrorResponse<T = any> {
  error?: T;
  message?: string;
  status?: boolean;
}

export const publicApi = (subPath: string = '', isDummyData: boolean = false) => {
  const url = isDummyData ? 'https://dummyapi.io/data/v1/' : `${process.env.API_URL}/${subPath}`;
  const api = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    (response: AxiosResponse<APIResponse, any>) => {
      checkErrorCdoe(response);
      return response;
    },
    (error) => {
      if (error.response.status === 401) return error.response;
      checkErrorCdoe(error.response);
      return error.response;
    },
  );

  return api;
};

export const privateApi = (subPath: string = '') => {
  const api = axios.create({
    // withCredentials: true,
    baseURL: `${process.env.API_URL}/${subPath}`,
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
    },
  );

  api.interceptors.response.use(
    async (response: AxiosResponse<APIResponse, any>) => {
      checkErrorCdoe(response);
      return response;
    },

    async (error: AxiosError) => {
      if (error.response) {
        // Access Token was expired
        if (error.response.status === 401) {
          const storedToken = getTokenStorage();

          try {
            const rs = await axios.post(
              `${process.env.API_URL}/auth/refresh`,
              {
                refreshToken: storedToken.refreshToken,
              },
              {
                headers: {
                  authorization: `Bearer ${storedToken.refreshToken}`,
                },
              },
            );

            setTokenStorage(rs.data.data);

            return api(error.config);
          } catch (_error: any) {
            console.log(_error);
            if (_error.response.status === 401) {
              cleanTokenStorage();
            }
            checkErrorCdoe(_error, _error);

            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(error);
    },
  );

  return api;
};

async function checkErrorCdoe(response: AxiosResponse<APIResponse, any>, catchError: any = 'good') {
  if (catchError.code === 'ERR_BAD_REQUEST') {
    store.dispatch(
      setAlertDialog({ show: true, msg: JSON.stringify({ code: catchError.code, status: catchError.status }) }),
    );
    return;
  }

  switch (response.data.status) {
    case false:
      store.dispatch(setAlertDialog({ show: true, msg: JSON.stringify(response.data) }));
      break;

    case true:
      break;

    default:
      break;
  }
}
