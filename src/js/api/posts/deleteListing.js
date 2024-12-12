// Author: Margrethe By
// Team: Enigma Bullet
import { apiUrl, listingsUrl } from '../constants.js';

export async function deleteItem() {
  const deleteButton = document.querySelector('#delete-button-on-listing-screen');

  // Check if the user is logged in by checking the presence of an access token
  const accessToken = localStorage.getItem('token');
  if (!accessToken) {
    // If not logged in, hide the DELETE button
    if (deleteButton) {
      deleteButton.style.display = 'none';
    }
  } else {
    // If logged in, ensure the DELETE button is visible and add the event listener
    if (deleteButton) {
      deleteButton.style.display = 'block'; // Show the button if the user is logged in
      deleteButton.addEventListener('click', () => {
       new bootstrap.Modal(document.getElementById('deleteListingModal')).show();
    })
  }
}
}
/**
 * Sends a delete request to the API based on the url parameter.
 */
export async function deleteListing() {
  const accessToken = localStorage.getItem('token');
  if (!accessToken) {
    throw new Error("Access token is not available");
  }
  const newAccessToken = accessToken.replace(/^"|"$/g, '');

  try {
    const url = new URL(location.href);
    const id = url.searchParams.get('id');
    const listingUrl = `${apiUrl}${listingsUrl}/${id}`;

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

    if (!response.ok) {
      alert(`Error deleting listing: ${result.message}`);
      throw new Error(`Error deleting listing: ${result.statusText}`);
    } else {
      document.getElementById("hide-delete-modal").click();
      new bootstrap.Modal(document.querySelector('#success-delete-modal')).show();
    }

    return result;
  } catch (error) {
    console.error(error);
  }
}


