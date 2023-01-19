import { dummyApiUrl } from './constants.js';

/*
Temporary id number, ideally it'll be found in the url by the Listener
If not available, uncomment const id = 1 and comment out const url and id in the listener
*/
const id = 1;
// Need to have /posts/ without the /1 for this use case.
const dummyApiDeletePost = 'posts/';

export async function deleteOffer(id) {
  if (!id) {
    throw new Error('Deleting an offer requires an offerID');
  }
  const deleteOfferURL = dummyApiUrl + dummyApiDeletePost + id;

  const response = await fetch(deleteOfferURL, {
    method: 'DELETE',
  });

  return await response.json();
}

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
