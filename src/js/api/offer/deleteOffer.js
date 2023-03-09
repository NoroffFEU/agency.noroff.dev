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
 * A function that deletes an offer as long as you're authorized to do it
 * @param {*} id
 * @returns that the offer with the ID was deleted, if an id is provided.
 */
export async function deleteOffer(id) {
  if (!id) {
    throw new Error('Deleting an offer requires an offerID');
  }
  const deleteOfferURL = dummyApiUrl + dummyApiDeletePost + id;

  const response = await fetch(deleteOfferURL, {
    method: 'DELETE',
    headers: headers(),
  });

  return await response.json();
}

/**
 * Listens for the button (in a form) to be used.
 */
export async function setDeleteOfferListener() {
  const form = document.querySelector('#deleteOffer');

  // const url = new URL(location.href);
  // const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      deleteOffer(id);
      console.log('test');
    });
  }
}
