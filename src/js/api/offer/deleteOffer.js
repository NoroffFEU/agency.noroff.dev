import { apiUrl, offerUrl } from '../constants.js';
import { headers } from '../headers.js';

/**
 * A function that deletes an offer as long as you're authorized to do it
 * @param {number} id - The ID of the offer to delete.
 * @returns A promise indicating that the offer was deleted.
 * @throws {Error} Throws an error if the deletion fails or if no ID is provided.
 */
export async function deleteOffer(id) {
  if (!id) {
    throw new Error('Deleting an offer requires an offer ID');
  }

  const deleteOfferURL = apiUrl.toString() + offerUrl + id;

  const response = await fetch(deleteOfferURL, {
    method: 'DELETE',
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error(`Error deleting offer: ${response.statusText}`);
  }

  return 'Offer deleted successfully';
}

/**
 * Listens for the button (in a form) to be used.
 */
export async function setDeleteOfferListener() {
  const form = document.querySelector('#deleteOffer');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const url = new URL(window.location.href);
      const id = url.searchParams.get('id');

      if (id) {
        try {
          const message = await deleteOffer(id);
          console.log(message); // or display it in the UI
          // Additional actions after deletion, like redirecting or updating the UI
        } catch (error) {
          console.error('Delete offer failed:', error);
          // Handle error in the UI
        }
      }
    });
  }
}
