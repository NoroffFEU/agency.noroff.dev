// Example of where I get the api call and headers for token
import { headers } from '../../api/headers.js';
// import { apiPath } from '../../api/constants';
import { dummyApiUrl, dummyApiCreateProduct } from '../../api/constants.js';

// Temp files until URL endpoint is made
const method = 'POST';
// const path = '';

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
