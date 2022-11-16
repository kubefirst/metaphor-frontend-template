import axios from 'axios';

export const metaphorJsApiClient = (baseURL: string) =>
  axios.create({
    baseURL,
  });

export const metaphorGoApiClient = (baseURL: string) =>
  axios.create({
    baseURL,
  });
