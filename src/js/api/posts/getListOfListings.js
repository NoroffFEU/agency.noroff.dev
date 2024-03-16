// Author: Emilie Herrera Thomsen
// The Dummy json needs to be replaced with actual endpoint.

// Updated by : Fredrik Tokle
// Removed  the getListOfListings() from the file, as it served no purpose.
// updated the url to the actual API endpoint.

// Updated by Mariusz Rozycki - Phoenix QA 16/03/2024.
// Add try...catch block code

import { authBaseFetchOpen } from '../apiBaseFetch.js';
import { apiPath } from '../constants.js';
import { showSpinner, hideSpinner } from '../../utilities/listings/loadingIndicator.js';

/**
 * function that retrieves an array of listings
 * @returns {Promise<Array>} - A Promise that resolves with a list of listings if successful.
 */

export async function getListOfListings() {
  showSpinner();
  try {
    const baseUrl = apiPath;
    const listingUrl = baseUrl + `listings`;

    const response = await authBaseFetchOpen(listingUrl);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    hideSpinner();
  }
}
