// Example of where I get the api call and headers for token
import { headers } from '../../api/headers';
import { apiPath } from '../../api/constants';

// Temp files until URL endpoint is made
const method = 'POST';
const path = '';

export async function createOffer(postData) {
  const createOfferURL = apiPath + path;

  const body = JSON.stringify(postData);
  const options = {
    method,
    body,
    headers: headers(),
  };

  try {
    const response = await fetch(createOfferURL, options);
    return await response.json();
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
}

export function setCreateOfferListener() {
  const form = document.querySelector('#createOffer');

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
