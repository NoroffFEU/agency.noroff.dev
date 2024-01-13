import { deleteSingleListing } from '../../api/posts/deleteSingleListing.js';

export async function deleteListing(id) {
  await deleteSingleListing(id);
  // TODO: Take action based on the result from API
}
