import { apiPath } from '../constants.js';

/**
 * Sends a DELETE request to remove a user with a given ID from the dummy API.
 *
 * @async
 * @function
 * @param {string|number} id - The unique identifier for the user to be deleted.
 * @returns {Promise<void|Error>} - Returns nothing if successful, or throws an error if something goes wrong.
 * @example
 *
 * deleteUser(123);
 * // Sends a DELETE request to the dummyApiUrl with the endpoint 'users/123'
 */
export async function deleteUser(id) {
  const deleteUrl = apiPath + `users/` + id;

  const options = {
    method: 'DELETE',
  };

  try {
    const response = await fetch(deleteUrl, options);
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err);
    return err;
  }
}
