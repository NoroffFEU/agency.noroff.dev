// Author: Erlend Bergeng
// Team: Elastic Meerkat

import { deleteUser } from '../../api/users/deleteUser.js';

/**
 * Adds an event listener to a user delete button with a given ID.
 * When the button is clicked, it prevents the default action and invokes the deleteUser function.
 *
 * @async
 * @function
 * @param {string|number} id - The unique identifier for the user.
 * @example
 *
 * addDeleteUserButtonEventListener(123);
 * // This will add an event listener to the button with id 'deleteBtn123'
 */
export async function addDeleteUserButtonEventListener(id) {
  document.querySelector(`#deleteBtn${id}`).addEventListener('click', (event) => {
    event.preventDefault();
    deleteUser(id);
  });
}
