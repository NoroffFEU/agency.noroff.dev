// Author: Emilie Herrera Thomsen
// The Dummy json needs to be replaced with actual endpoint.

import { apiPath } from '../constants.js';
import { headers } from '../headers.js';

export async function getListOfListings() {
  const getListingsUrl = apiPath;
  const data = await fetch(getListingsUrl, {
    method: 'GET',
    headers: headers(),
    body: JSON.stringify(),
  });

  const dataListings = await data.json();
  if (data.ok) {
    return dataListings;
  } else {
    console.error(`Error: ${data.status} ${data.statusText}`);
  }
}
