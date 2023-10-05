// Author: Erlend Bergeng
// Team: Elastic Meerkat

// Import API url for fetch the data (dummy API for users data)
import { dummyApiUrl } from '../../api/constants.js';
// import headers for the requestOption
import { headers } from '../../api/headers.js';
// import deleteUser function

/**
 * Fetches all users from the dummy API.
 * 
 * @async
 * @function
 * @returns {Promise<Array<Object>|Error>} Returns a promise that resolves with an array of user objects, or rejects with an error.
 * @throws {Error} Throws an error if there's an issue fetching the users.
 */
export async function getAllUsers() {
  const userUrl = dummyApiUrl + `users`;

  const options = {
    method: "GET",
    headers: headers()
  }

  try {
    const response = await fetch(userUrl, options)
    const json = await response.json()
    return json.users
  }catch(err) {
    console.log(err)
    return err
  }
}