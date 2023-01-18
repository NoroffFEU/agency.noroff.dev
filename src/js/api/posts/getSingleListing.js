import { apiBaseFetch } from '../apiBaseFetch.js';
/*import { apiUrl } from '../constants.js';*/

export async function getSingleListing(id) {
  if (!id) {
    throw new Error('Get requires a listingID');
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  const url = `https://dummyjson.com/products/${id}`;

  const response = await apiBaseFetch(url, headers);

  if (!response.ok) {
    return await response;
  }
}
