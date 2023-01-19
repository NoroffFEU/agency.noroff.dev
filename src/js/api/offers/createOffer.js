// Example of where I get the api call and headers for token
import { headers } from '../headers.js';
// import { apiPath } from '../../api/constants';
import { dummyApiUrl, dummyApiCreateProduct } from '../constants.js';

// Temp files until URL endpoint is made
const method = 'POST';
// const path = '';

/**
 * Function that based on input data creates an offer.
 * @param {*} postData
 * @returns the data filled into the form in json format.
 */
export async function createOffer(postData) {
  const createOfferURL = dummyApiUrl + dummyApiCreateProduct;

  const body = JSON.stringify(postData);
  const options = {
    method,
    headers: headers(),
    body,
  };

  const response = await fetch(createOfferURL, options);
  return await response.json();
}
/**
 * Listens for the form to be filled in,
 * if filled in properly, POST the Offer.
 */
export async function setCreateOfferListener() {
  const form = document.querySelector('#offerForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const offerData = Object.fromEntries(formData.entries());

      // Send to API
      createOffer(offerData);
    });
  }
}
