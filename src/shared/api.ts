import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {BACKEND_URL, REQUEST_TIMEOUT} from '@constants';
import {getToken} from '@shared/token.ts';

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
      config.headers['x-token'] = getToken();
      if (!config.signal) {
        config.signal = AbortSignal.timeout(REQUEST_TIMEOUT);
      }
      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageT>) => {
      if (error.response) {
        const {status, config} = error.response;

        if (status === 401 || config.url === '/login' && config.method === 'get') {
          return Promise.reject(error);
        }

        console.warn('API error', error.response.data.message);
      }

      return Promise.reject(error);
    }
  );
  return api;
};
