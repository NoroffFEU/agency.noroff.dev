import { apiBaseFetch } from '../apiBaseFetch.js';
import { apiUrl, listingsUrl } from '../constants.js';

/**
 * This function sends a GET request to the API to retrieve the details of a single listing.
 *
 * @param {string} id - The unique identifier of the listing to be retrieved.
 * @returns {Promise<Response>} - A promise that resolves with the response from the API.
 * @throws {Error} If the 'id' parameter is missing or the request fails.
 */
export async function getSingleListing(id) {
  if (!id) {
    throw new Error('Get requires a listing ID');
  }

  const getListingURL = apiUrl.toString() + listingsUrl + id;

  try {
    const response = await apiBaseFetch(getListingURL);

    if (!response.ok) {
      throw new Error(`Error retrieving listing: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Get listing failed:', error);
    throw error;
  }
}
