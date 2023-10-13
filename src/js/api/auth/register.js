import { apiUrl } from '../constants.js';

const action = 'users';
const method = 'POST';

export async function register(profile) {
  let data, error;
  const registerURL = apiUrl + action;
  try {
    const response = await fetch(registerURL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(profile),
    });
    const json = await response.json();
    
    if (response.ok) {
      data = json;
    } else {
      error = extractError(json);
    }
    /* switch (response.status) {
      case 201:
        const result = await response.json();
        window.location.replace('/pages/auth/login/index.html');
        return result;
      default:
        throw new Error(`${response.status} ${response.statusText}`);
    } */

  } catch (err) {
    error = err.toString();
  }
  return { data, error };
}

function extractError(responseData) {
  if (
    responseData &&
    responseData.errors &&
    Array.isArray(responseData.errors)
  ) {
    return responseData.errors.map((error) => error.message).join("\n");
  }
  return "There was an error processing the request.";
}