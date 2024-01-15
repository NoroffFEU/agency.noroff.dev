/**
 *
 * @param {Object} profile - The profile data for the user to be registered.
 * @param {string} profile.username - The username of the user.
 * @param {string} profile.email - The email of the user.
 * @param {string} profile.password - The password of the user.
 * @returns {Promise<{data: any, error: string | null}>} A promise that resolves to the JSON data returned by the API.
 */
export async function registerUser(profile) {
  const registerURL = 'https://cors.noroff.dev/https://agency-api.noroff.dev/users';

  const response = await fetch(registerURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(profile),
  });

  const data = await response.json();

  if (!response.ok) {
    return { data: null, error: extractError(data) };
  }

  return { data, error: null };
}

function extractError(responseData) {
  if (responseData?.message) {
    return responseData.message;
  }

  if (responseData?.errors && Array.isArray(responseData?.errors)) {
    return responseData.errors.map((error) => error.message).join('\n');
  }

  if (responseData?.status && responseData?.text) {
    return `Error: ${responseData.status}, ${responseData.text}`;
  }

  return 'There was an error processing the request.';
}
