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
  if (!id) {
    throw new Error('Edit requires a listing ID');
  }

  const editListingURL = apiUrl.toString() + listingsUrl + id;

  try {
    const accessToken = getToken('token');
    if (!accessToken){
      throw new Error("Access token is not available");
    }
    const newAccessToken = accessToken.replace(/^"|"$/g, '');

    const editData = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${newAccessToken}` },
      body: JSON.stringify(updatedData),
    };

    const response = await fetch(editListingURL, editData);

    if (!response.ok) {
      const editResponse = await response.json();
      throw new Error(`Error editing listing: ${editResponse.message || response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Edit listing failed:', error);
    throw error;
  }
}