import { apiUrl, usersUrl } from '../constants.js';

/**
 * Sends a DELETE request to remove a user with a given ID.
 *
 * @param {string|number} id - The unique identifier for the user to be deleted.
 * @returns {Promise<void|Error>} - Returns nothing if successful, or throws an error if something goes wrong.
 */
export async function deleteUser(id) {
  if (!id) {
    throw new Error('Delete user requires a user ID');
  }

  const deleteUrl = apiUrl.toString() + usersUrl + id;

  const options = {
    method: 'DELETE',
  };

  try {
    const response = await fetch(deleteUrl, options);

    if (!response.ok) {
      throw new Error(`Error deleting user: ${response.statusText}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (err) {
    console.error('Delete user failed:', err);
    throw err;
  }
}
