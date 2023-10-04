// Author: Erlend Bergeng
// Team: Elastic Meerkat

// Import API url for fetch the data (dummy API for users data)
import { dummyApiUrl } from '../../api/constants.js';
// import headers for the requestOption
import { headers } from '../../api/headers.js';
// import deleteUser function

/**
 * Fetches and displays all users in the '#userProfile' container.
 * 
 * @async
 * @function
 * @returns {Promise<void>} Returns a promise that resolves once users are fetched and displayed.
 * @throws {Error} Throws an error if there's an issue fetching or displaying the users.
 */
export async function showUsers() {
  const container = document.querySelector('#userProfile');
  const users = await getAllUsers()
  let HTML = ``
  users.forEach(user => {
    const fullName = `${user.firstName} ${user.lastName}`
    const email = user.email
    const id = user.id

    HTML += `<tr>
                    <th scope="row">${fullName}</th>
                    <td>${email}</td>
                    <td>
                    <button class="btn btn-sm" id="deleteBtn${id}"><img src="/src/assets/icons/delete-black.svg" alt="Delete button" class="footerIcon" /></button>
                    </td>
                  </tr>`; 
  });
  container.innerHTML = HTML

  /*
  //-------- Commented out for now, addDeleteUserButtonEventListener is not ready. ----------//
  users.forEach(user => {
    const userId = user.id
    addDeleteUserButtonEventListener(userId)
  })
  */
}

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