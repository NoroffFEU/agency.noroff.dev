import { apiUrl } from '../constants.js';

const action = '/auth/register';
const method = 'post';

export async function registerCompany(profile) {
  const registerURL = apiUrl + action;

  try {
    const response = await fetch(registerURL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(profile),
    });

    switch (response.status) {
      case 201:
        const result = await response.json();
        window.location.replace('/pages/auth/login/index.html');
        return result;
      default:
        throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}
