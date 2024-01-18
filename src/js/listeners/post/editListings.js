// Author: Gonzalo Longe

import { editSingleListing } from '../../api/posts/editSingleListing.js';
/**
 * function that allows users to edit the a listing, if a user clicks the submit button a new object is created with the new input the function the sends the new object to the api
 * after the listing is updated the page reloads
 */
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
