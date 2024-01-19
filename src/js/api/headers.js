import { getToken } from './getToken.js';
/**
 * function that takes one parameter, it retrives the authentication token from local storage and uses the
 * content type parameter to create a header used in a HTTP request
 * @param {string} contentType 
 * @returns {object}
 */
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
