// Author: Gonzalo Longe

import { deleteSingleListing } from '../../api/posts/deleteSingleListing.js';

export async function deleteListing(id) {
  const res = await deleteSingleListing(id);
  // TODO: Take action based on the result from API
}

export async function editListing(id) {
  // TODO: Navigate to edit page
}
