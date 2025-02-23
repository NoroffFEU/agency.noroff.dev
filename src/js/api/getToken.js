/**
 *  Retrives the token from the local storage or session storage
 * @return {string|null} The API auth token
 */
export function getToken() {
  // Try to get the token from sessionStorage
  let sessionToken = sessionStorage.getItem('token');
  if (sessionToken) {
    // Removes any extra quotes around the token
    sessionToken = sessionToken.replace(/^"|"$/g, '');
    return sessionToken;
  }

  // Try to get the token from localStorage
  let token = localStorage.getItem('token');
  if (token) {
    // Removes any extra quotes around the token
    token = token.replace(/^"|"$/g, '');
    return token;
  }

  // If no token found, return null
  return null;
}

