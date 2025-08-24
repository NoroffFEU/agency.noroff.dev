/**
 * @typedef {('Applicant' | 'Client' | 'Admin')} UserRole
 */

/**
 * @typedef {Object} UserData
 * @property {string | null} avatar
 * @property {string} email
 * @property {string} firstName
 * @property {string} id
 * @property {string} lastName
 * @property {UserRole} role
 * @property {string} token
 */

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{userData: UserData | null, error: any}>}
 */
export async function callLoginApi(email, password) {
  const url = 'https://cors.noroff.dev/https://agency-api.noroff.dev/users/login';
  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);

  const userData = await response.json();
  console.log('API response:', await response.clone().json());

  if (!response.ok) {
    return {
      userData: null,
      error: userData,
    };
  }

  return {
    userData: userData,
    error: null,
  };
}
