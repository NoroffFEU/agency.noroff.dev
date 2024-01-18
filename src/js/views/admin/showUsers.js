// Author: Erlend Bergeng
// Team: Elastic Meerkat

import { getAllUsers } from '../../api/users/getAllUsers.js';
import { addDeleteUserButtonEventListener } from './deleteUsers.js';

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
  const users = await getAllUsers();
  let HTML = ``;
  users.forEach((user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    const email = user.email;
    const id = user.id;

    HTML += `<tr>
                    <th scope="row">${fullName}</th>
                    <td>${email}</td>
                    <td>
                    <button class="btn btn-sm" id="deleteBtn${id}"><img src="/assets/icons/delete-black.svg" alt="Delete button" class="footerIcon" /></button>
                    </td>
                  </tr>`;
  });
  container.innerHTML = HTML;

  users.forEach((user) => {
    const userId = user.id;
    addDeleteUserButtonEventListener(userId);
  });
}
