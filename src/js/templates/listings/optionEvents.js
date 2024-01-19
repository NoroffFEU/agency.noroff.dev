import { deleteSingleListing } from '../../api/posts/deleteSingleListing.js';
/**
 * function that calls the deleteSingleListing() function which uses the id parameter to send a delete request to the API
 * which deletes a lisiting
 * @param {string} id 
 */
export async function deleteListing(id) {
  await deleteSingleListing(id);
  // TODO: Take action based on the result from API
}
