import { apiBaseFetch } from '../apiBaseFetch.js';
import { apiUrl, listingsUrl } from '../constants.js';
import { getToken } from '../getToken.js';

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
  event.preventDefault();
  if (!id) {
    throw new Error('Edit requires a listing ID');
  }

  const editListingURL = apiUrl.toString() + listingsUrl + id;

  try {
    const accessToken = getToken('token');
    const newAccessToken = accessToken.replace(/^"|"$/g, '');

    const response = await apiBaseFetch(editListingURL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${newAccessToken}` },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      alert(`Error editing listing: ${response.message}`);
      throw new Error(`Error editing listing: ${response.statusText}`);
    } else {
      new bootstrap.Modal(document.querySelector('#success-modal')).show();
    }

    return response.json();
  } catch (error) {
    console.error('Edit listing failed:', error);
    throw error;
  }
}
