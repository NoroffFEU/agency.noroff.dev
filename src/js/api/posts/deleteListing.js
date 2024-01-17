// Author: Margrethe By
// Team: Enigma Bullet

import { apiUrl, listingsUrl } from '../constants.js';

const modal = new bootstrap.Modal(document.getElementById('deleteListingModal'));

export async function deleteItem() {
  const form = document.querySelector('#deleteThisListing');
  form.addEventListener('click', deleteListing);
}

/**
 * Sends a delete request to the API based on the url parameter.
 * @param { string } url to target the listing that is going to be deleted.
 */
export async function deleteListing() {
  const accessToken = localStorage.getItem('token');
  if (!accessToken){
    throw new Error("Access token is not available");
  }
  const newAccessToken = accessToken.replace(/^"|"$/g, '');

  try {
    const url = new URL(location.href);
    const id = url.searchParams.get('id');
    const listingUrl = apiUrl.toString() + listingsUrl + id;

    const listingData = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${newAccessToken}`,
      },
      body: JSON.stringify(),
    };

    const response = await fetch(listingUrl, listingData);
    const result = await response.json();

      if (!result.ok) {
        alert(`Error editing listing: ${result.message}`);
        throw new Error(`Error editing listing: ${result.statusText}`);
      } else {
          modal.hide();
          new bootstrap.Modal(document.querySelector('#success-delete-modal')).show();
      }

    return result;
  } catch (error) {
    console.log(error);
  }
}
