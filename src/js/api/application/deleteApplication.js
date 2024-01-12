import { apiUrl, applicationUrl } from '../constants.js';
import { headers } from '../headers.js';

/**
 * A function that deletes an application as long as you're authorized to do it
 * @param {*} id
 * @returns String "Deleted!" when success, else throws an error.
 */
export async function deleteApplication(id) {
  if (!id) {
    throw new Error('Missing application ID');
  }

  const deleteApplicationURL = apiUrl.toString() + applicationUrl + id;

  const response = await fetch(deleteApplicationURL, {
    method: 'DELETE',
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error('Failed to delete application: ' + response.statusText);
  }
  return 'Deleted!';
}

/**
 * Listens for the button (in a form) to be used.
 */
export async function setDeleteApplicationListener() {
  const form = document.querySelector('#deleteApplication');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const url = new URL(window.location.href);
      const id = url.searchParams.get('id');
      if (id) {
        deleteApplication(id)
          .then(() => {
            // Display success modal / redirect the page
          })
          .catch((error) => {
            console.error(error);
            // Handle error
          });
      }
    });
  }
}
