/**
 *  Retrives the token from the local storage or session storage
 * @return {string|null} The API auth token
 */
export function getToken() {
  const sessionToken = sessionStorage.getItem('token');
  if (sessionToken) return sessionToken;
  const token = localStorage.getItem('token');
  if (token) return token;
  return null;
}
