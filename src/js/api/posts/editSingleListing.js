// Author: Gonzalo Longe

import { apiBaseFetch } from '../apiBaseFetch.js';
/*import { apiUrl } from '../constants.js';*/

/**
 * 
 * @param {string} id - The unique identifier of the product listing to be retrieved.  
 * @returns {Promise<Response>} - A promise that resolves with with the response from the API 
 * @throws {Error} If the 'id' parameter is missing 
 */

export async function editSingleListing(id) {
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
