// Author: Emilie Herrera Thomsen
// The Dummy json needs to be replaced with actual endpoint.

//Updated by : Fredrik Tokle
// Removed  the getListOfListings() from the file, as it served no purpose.
//updated the url to the actual API endpoint.

import { authBaseFetchOpen } from '../apiBaseFetch.js';
import { apiPath } from '../constants.js';
import { showSpinner } from '../../utilities/listings/loadingIndicator.js';
import { hideSpinner } from '../../utilities/listings/loadingIndicator.js';

/**
 * function that retrieves an array of listings
 * @returns {Promise<Array>} - A Promise that resolves with a list of listings if successful.
 */
export async function getListOfListings() {
  showSpinner();
  const baseUrl = apiPath;
  const listingUrl = baseUrl + `listings`;

  const response = await authBaseFetchOpen(listingUrl);
  hideSpinner();

  if (!response.ok) {
    console.error(`Error: ${response.status} ${response.statusText}`);
  } else {
    return response.json();
  }
}
