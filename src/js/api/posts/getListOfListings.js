// Author: Emilie Herrera Thomsen
// The Dummy json needs to be replaced with actual endpoint.

// Updated by : Fredrik Tokle
// Removed  the getListOfListings() from the file, as it served no purpose.
// updated the url to the actual API endpoint.

// Updated by Mariusz Rozycki - Phoenix QA 16/03/2024.
// Add try...catch block code

//Updated by Kristine Alexandersen - FED22P 16/12-24.
//Added filter and sort to display only listings with deadlines in the future.

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

    const currentDate = new Date();
    const filteredData = data.filter((listing) => {
      const deadline = new Date(listing.deadline);
      return deadline >= currentDate;
    });

    filteredData.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    return filteredData;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    hideSpinner();
  }
}
