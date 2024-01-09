// Author: Gonzalo Longe

import { apiBaseFetch } from '../apiBaseFetch.js';
/*import { apiUrl } from '../constants.js';*/

/**
 * Deletes a single product listing bu its ID
 * Sends a DELETE request to the API to delete a product listing with the specific ID.
 *
 * @param {string} id - The unique identifier of the product listing to be deleted.
 * @returns {Promise<Response>} A Promise that resolves with the response from the API after the deletion.
 * @throws {Error} If the 'id' parameter is missing.
 */

export async function deleteSingleListing(id) {
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
