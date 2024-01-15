import { authBaseFetchOpen } from '../apiBaseFetch.js';
import { apiUrl, listingsUrl } from '../constants.js';

//Author Fredrik Tokle
/**
 * This function sends a GET request to the API to retrieve the details of a single listing.
 *
 * @param {string} id - The unique identifier of the listing to be retrieved.
 * @returns {Promise<Response>} - A promise that resolves with the response from the API.
 * @throws {Error} If the 'id' parameter is missing or the request fails.
 */
export  const getSingleListing = async (id) => {
  if (!id) {
    throw new Error('Get requires a listing ID');
  }

  const getListingURL = apiUrl.toString() + listingsUrl + id ;

  try {
    const response = await authBaseFetchOpen(getListingURL);

    
    if (!response.ok) {
     
      alert('Error retrieving listing') + response.status + response.statusText;
    }

    return response.json()
  } catch (error) {
    console.error('Get listing failed:', error);
    throw error;
  }
}
