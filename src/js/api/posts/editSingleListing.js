import { apiBaseFetch } from '../apiBaseFetch.js';
import { apiUrl, listingsUrl } from '../constants.js';

/**
 * Edits a single listing by its ID.
 * Sends a PUT request to the API to update a listing with the specific ID.
 *
 * @param {string} id - The unique identifier of the listing to be edited.
 * @param {Object} updatedData - The updated data for the listing.
 * @returns {Promise<Response>} - A promise that resolves with the response from the API.
 * @throws {Error} If the 'id' parameter is missing or the request fails.
 */
export async function editSingleListing(id, updatedData) {
  if (!id) {
    throw new Error('Edit requires a listing ID');
  }

  const editListingURL = apiUrl.toString() + listingsUrl + id;
  const headers = { 'Content-Type': 'application/json' };

  try {
    const response = await apiBaseFetch(editListingURL, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Error editing listing: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Edit listing failed:', error);
    throw error;
  }
}
