import { store } from '~/store';
import { setToken } from '~/store/auth';

export const setTokenStorage = (tokens: { accessToken: string; refreshToken: string }) => {
  localStorage.setItem('tokens', JSON.stringify(tokens));
  store.dispatch(setToken({ ...tokens, userInformation: null }));
  // store.dispatch(setTokenConfig({}));
};

export const getTokenStorage = () => {
  const tokens = localStorage.getItem('tokens');
  if (tokens == undefined) return { accessToken: '', refreshToken: '' };
  if (tokens) return JSON.parse(tokens);
  return '';
};

export const cleanTokenStorage = () => {
  localStorage.removeItem('tokens');
  store.dispatch(setToken({ accessToken: '', refreshToken: '', userInformation: null }));
};

export const useBrushStorage = () => {
  const key = 'brush-color';
  const setBrushStorage = (value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const getBrushStorage = () => {
    const value = sessionStorage.getItem(key);
    if (value == undefined) return null;
    if (value) return JSON.parse(value);
    return null;
  };

  const removeBrushStorage = () => {
    sessionStorage.removeItem(key);
  };
  return { setBrushStorage, getBrushStorage, removeBrushStorage };
};
