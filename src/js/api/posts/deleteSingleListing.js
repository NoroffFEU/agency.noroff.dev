import { apiBaseFetch } from '../apiBaseFetch.js';
import { apiUrl, listingsUrl } from '../constants.js';

/**
 * Deletes a single listing by its ID
 * Sends a DELETE request to the API to delete a listing with the specific ID.
 *
 * @param {string} id - The unique identifier of the listing to be deleted.
 * @returns {Promise<Response>} A Promise that resolves with the response from the API after the deletion.
 * @throws {Error} If the 'id' parameter is missing or the request fails.
 */
export async function deleteSingleListing(id) {
  if (!id) {
    throw new Error('Delete requires a listing ID');
  }

  const deleteListingURL = apiUrl.toString() + listingsUrl + id;
  const headers = { 'Content-Type': 'application/json' };

  try {
    const response = await apiBaseFetch(deleteListingURL, {
      method: 'DELETE',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`Error deleting listing: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Delete listing failed:', error);
    throw error;
  }
}
