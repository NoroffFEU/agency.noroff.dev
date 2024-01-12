import { apiUrl, offerUrl } from '../constants.js';
import { headers } from '../headers.js';

/**
 * Function that based on input data creates an offer.
 * @param {*} postData - The data for the offer to be created.
 * @returns The response data from the API.
 * @throws {Error} Throws an error if the API request fails.
 */
export async function createOffer(postData) {
  const createOfferURL = apiUrl.toString() + offerUrl;

  const body = JSON.stringify(postData);
  const options = {
    method: 'POST',
    headers: headers(),
    body,
  };

  try {
    const response = await fetch(createOfferURL, options);

    if (!response.ok) {
      throw new Error(`Error creating offer: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Create offer failed:', error);
    throw error;
  }
}

/**
 * Listens for the form to be filled in and submits the offer data.
 */
export async function setCreateOfferListener() {
  const form = document.querySelector('#offerForm');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const offerData = Object.fromEntries(formData.entries());

      try {
        const result = await createOffer(offerData);
        console.log(result); // or display it in the UI
        // Additional actions after successful creation
      } catch (error) {
        console.error('Submit offer failed:', error);
        // Handle error in the UI
      }
    });
  }
}
