import { displayAllApplications } from '../../ui/application/allApplications';

/**
 * Gets all applications sent by student
 * @param {string} url
 * @param {object} headers
 */
export async function fetchAllApplications(url, headers) {
  const data = await apiBaseFetch(url, headers);
  if (!data.ok) {
    displayAllApplications(data);
  } else {
    console.log('Error');
  }
}
