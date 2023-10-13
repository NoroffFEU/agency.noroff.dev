import { getToken } from './getToken.js';

export const headers = (contentType) => {
  const token = getToken();
  const headers = {};

  if (contentType) {
    headers['Content-Type'] = contentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};
