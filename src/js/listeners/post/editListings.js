// Author: Gonzalo Longe

import { editSingleListing } from '../../api/posts/editSingleListing.js';
import { getSingleListing } from '../../api/posts/getSingleListing.js';

export async function editListingListener() {
  const form = document.querySelector('#editListing');

  const url = new URL(location.href);
  const id = url.searchParams.get('id');

  //display existing information in the inputs
  if (form) {
    const button = form.querySelector(".editBtn");
    button.disabled = true;

    const listing = await getSingleListing(id);

    //considering this is returned from the API
    form.title.value = listing.title;
    form.location.value = listing.location;
    form.deadline.value = listing.deadline;
    form.media.value = listing.media;
    form.jobDescription.value = listing.description;

    button.disabled = false;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = event.target;
    const formData = new FormData(data);
    const listing = Object.fromEntries(formData.entries());
    listing.id = id;

    //send it to API
    editSingleListing(listing);
    location.reload();
  });
}
