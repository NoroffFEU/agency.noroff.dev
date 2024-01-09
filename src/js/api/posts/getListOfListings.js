// Author: Emilie Herrera Thomsen
// The Dummy json needs to be replaced with actual endpoint.

import { authBaseFetchOpen } from '../apiBaseFetch.js';

export async function getListOfListings() {
  const getListingsUrl = 'https://dummyjson.com/products';

  const response = await authBaseFetchOpen(getListingsUrl);

  if (response.ok) {
    return await response.json();
  } else {
    console.error(`Error: ${response.status} ${response.statusText}`);
  }
}
getListOfListings();
