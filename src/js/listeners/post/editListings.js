// Author: Gonzalo Longe

import { editSingleListing } from '../../api/posts/editSingleListing.js';

export async function editListingListener() {
  const form = document.querySelector('#editListings');

  const url = new URL(location.href);
  const id = url.searchParams.get('id');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());
    listing.id = id;

    //send it to API
    editSingleListing(listing);
    location.reload();
  });
}
