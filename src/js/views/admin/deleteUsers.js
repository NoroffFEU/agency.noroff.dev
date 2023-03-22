// Author: Linus Aakerberg
// Team: FE-Offers

// Import API url for fetch the data (dummy API for users data)
import { dummyApiUrl } from '../../api/constants.js';

export async function deleteUser(userId) {
  const deleteUserApi = `${dummyApiUrl}users/${userId}`;
  try {
    const reqOption = {
      method: 'delete',
    };
    const response = await fetch(deleteUserApi, reqOption);

    return response;
  } catch (error) {
    console.log(error);
  }
}

/**
 * This is a delete button that's will delete to post.
 */
/* btnDelete.onclick = function () {

    setTimeout(() => {
        const btnDelete = document.querySelector('#deleteUserBtn');
        console.log(btnDelete);
      }, 100);

  deletePost(id);
  deleteUser();
  redirectDelete();
}; */
