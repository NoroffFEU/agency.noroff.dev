// Author: Linus Aakerberg
// Team: FE-Offers

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

// Import API url for fetch the data (dummy API for users data)
import { dummyApiUrl } from '../../api/constants.js';

export const deleteUserApi = dummyApiUrl + `users` + id;

export async function deleteUser(url, data) {
  try {
    const reqOption = {
      method: 'delete',
    };
    const response = await fetch(deleteUserApi, reqOption);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

setTimeout(() => {
  const btnDelete = document.querySelector('#deleteUserBtn');
  console.log(btnDelete);
  btnDelete.onclick = function () {
    deleteUser();
    window.location.replace('/pages/admin/offers/show-offers/index.html');
  };
}, 100);

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
