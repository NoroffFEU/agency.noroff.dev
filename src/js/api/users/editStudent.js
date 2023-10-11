import { apiPath } from '../constants.js';

const method = 'PUT';
const action = 'users/';

export async function editStudent(profile) {
  const { id } = profile;
  const profileURL = apiPath + action + `${id}`;
  const body = JSON.stringify(profile);
  const options = {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(profileURL, options);
    const profile = await response.json();

    switch (response.status) {
      case 200: {
        alert('Update was successful');
        return profile;
      }
      default:
        throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(err);
  }
}
