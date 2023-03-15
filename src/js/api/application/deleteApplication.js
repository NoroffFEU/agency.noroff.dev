import { dummyApiUrl } from '../constants.js';
import { headers } from '../headers.js';
/*
Temporary id number, ideally it'll be found in the url by the Listener
If not available, uncomment const id = 1 and comment out const url and id in the listener
*/
const id = 1;
// Need to have /posts/ without the /1 for this use case.
const dummyApiDeletePost = 'posts/';
/**
 * A function that deletes an application as long as you're authorized to do it
 * @param {*} id
 * @returns that the application with the ID was deleted, if an id is provided.
 */
export async function deleteApplication(id) {
  if (!id) {
    throw new Error('Missing application ID');
  }

  const deleteApplicationURL = dummyApiUrl + dummyApiDeletePost + id;

  const response = await fetch(deleteApplicationURL, {
    method: 'DELETE',
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error(response);
  }
  return 'Deleted!';
}

/**
 * Listens for the button (in a form) to be used.
 */
export async function setDeleteApplicationListener() {
  const form = document.querySelector('#deleteApplication');

  // Uncomment when not using dummy API
  // const url = new URL(location.href);
  // const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      deleteApplication(id);
      // Display success modal / redirect the page
    });
  }
}
