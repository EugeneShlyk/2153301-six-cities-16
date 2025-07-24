import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {BACKEND_URL, REQUEST_TIMEOUT} from '@constants';

type DetailMessageT = {
  type: string;
  message: string;
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {

      config.headers['x-token'] = 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageT>) => {
      if (error.response) {
        const errorMessage = error.response.data;
        console.log(errorMessage);
      }
    }
  );

  return api;
};
