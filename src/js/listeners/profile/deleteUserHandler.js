import { deleteUser } from '../../views/admin/deleteUsers.js';

/**
 * @description adds a listener to a delete button that deletes user when clicked. If button or id is not passed in, the function will give a warning in console and exit function and not set a listener
 * @param {Element} btn a clickable button element that will delete user
 * @param {number} userId the id of the user that will be removed
 * @example
 * // pass in the btn element to be clicked
 * // along with the the ID of the user
 * // connected to delete button
 *
 * const deleteUserBtn = document.createElement('button')
 * const USER_ID = 12345678
 *
 * setDeleteUserListener(deleteUserBtn, USER_ID)
 *
 */
export function setDeleteUserListener(btn, userId) {
  if (!btn) return console.warn('could not add listener to button because no button element was passed in to this function');
  if (!userId) return console.warn('could not add listener to button because no user id was passed in to this function');

  btn.addEventListener('click', async () => {
    const response = await deleteUser(userId);

    switch (response.status) {
      case 200:
        // window.location.href = '/pages/admin/offers/show-offers/index.html';
        console.log('succesfully removed user');
        break;
      case 404:
        alert('We couldn´t remove user, because we couldn´t find them');
        break;
      default:
        alert('something went wrong');
        break;
    }
  });
}
