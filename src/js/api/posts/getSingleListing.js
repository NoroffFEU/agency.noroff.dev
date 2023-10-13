// Author: May-Tove Hovdal

import { apiBaseFetch } from '../apiBaseFetch.js';
/*import { apiUrl } from '../constants.js';*/

/**
 * This functino sends a GET request to the API to retrieve the details of a single listing 
 * 
 * @param {string} id - The unique identifier of the listing to be retrieved. 
 * @returns {Promise<Response>} 
 */

export async function getSingleListing(id) {
  if (!id) {
    throw new Error('Get requires a listingID');
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  const url = `https://dummyjson.com/products/${id}`;

  const response = await apiBaseFetch(url, headers);

  if (!response.ok) {
    return await response;
  }
}
