import { displaySingleApplication } from '../../ui/application/singleApplication.js';
import { apiBaseFetch } from '../apiBaseFetch.js';

/// Query string for single application
/// const queryString = document.location.search;
/// const params = new URLSearchParams(queryString);
/// export const id = params.get('id');


/**
 * Fetches single application
 * @param {string} url - The URL for single application GET request
 * @param {object} headers - The required headers
 */
export async function fetchSingleApplication(url, headers) {
  const data = await apiBaseFetch(url, headers);
  if (!data.ok) {
    displaySingleApplication(data);
  } else {
    console.log('Error');
  }
}
