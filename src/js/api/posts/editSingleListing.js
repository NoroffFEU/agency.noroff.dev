// Author: Gonzalo Longe

import { authBaseFetchOpen } from "../apiBaseFetch";
/*import { apiUrl } from '../constants.js';*/

const method = "put";

export async function editSingleListing(listingData) {
  if (!listingData.id) {
    throw new Error('Update requires a listingID');
  }

  const url = `https://dummyjson.com/products/${listingData.id}`;


  const response = await authBaseFetchOpen(url, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(listingData)
  });

  if (response.ok) {
    return await response.json();
  }
}
