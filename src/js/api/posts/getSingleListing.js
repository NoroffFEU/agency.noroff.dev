import { apiBaseFetch } from '../apiBaseFetch.js';
import { apiUrl } from '../constants.js';

export async function getSingleListing(id) {
  if (!id) {
    throw new Error('Get requires a listingID');
  }

  const headers = {
    'Content-Type': 'application/json',
  };
  const data = await apiBaseFetch(apiUrl + id, headers);

  if (data.ok) {
    return await data.json();
  } else {
    console.log('Error');
  }
}
