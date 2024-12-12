// Author: Margrethe By
// Team: Enigma Bullet
import { apiUrl, listingsUrl } from '../constants.js';

export async function deleteItem() {
  const deleteButton = document.querySelector('#delete-button-on-listing-screen');
  const deleteModalElement = document.getElementById('deleteListingModal');
  const deleteModal = new bootstrap.Modal(deleteModalElement);
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
       deleteModal.show();
    })
    document.getElementById('deleteListingModal').addEventListener('click', (event) => {
      if(event.target.id = 'cancel-delete-listing--btn') {
        deleteModal.hide();
      } 
      if(event.target.id = 'confirm-delete-listing-btn') {
        deleteListing();
      }
    })
  }
}
}
/**
 * Sends a delete request to the API based on the url parameter.
 */
async function deleteListing() {
  const accessToken = localStorage.getItem('token');
  const successDeleteModalElement = document.getElementById('success-delete-modal');
  const successModal = new bootstrap.Modal(successDeleteModalElement);


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
      successModal.show();
      document.getElementById("hide-delete-modal-btn").addEventListener('click', () => {
        successModal.hide();
      })
    }

    return result;
  } catch (error) {
    console.error(error);
  }
}


