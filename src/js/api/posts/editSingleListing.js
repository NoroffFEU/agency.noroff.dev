import { apiUrl, listingsUrl } from '../constants.js';
import { getToken } from '../getToken.js';

/**
 * Edits a single listing by its ID.
 * Sends a PUT request to the API to update a listing with the specific ID.
 *
 * @param {string} id - The unique identifier of the listing to be edited.
 * @param {Object} updatedData - The updated data for the listing.
 * @returns {Promise<Response>} - A promise that resolves with the response from the API.
 * @throws {Error} If the 'id' parameter is missing or the request fails.
 */

export async function editSingleListing(id, updatedData) {
  if (!id) {
    throw new Error('Edit requires a listing ID');
  }

  const editListingURL = apiUrl.toString() + listingsUrl + id;

  try {
    const accessToken = getToken('token');
    if (!accessToken) {
      throw new Error('Access token is not available');
    }
    const newAccessToken = accessToken.replace(/^"|"$/g, '');

    const editData = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${newAccessToken}` },
      body: JSON.stringify(updatedData),
    };

    const response = await fetch(editListingURL, editData);

    if (!response.ok) {
      const editResponse = await response.json();
      alert(`Error editing listing: ${editResponse.message}`);
      throw new Error(`Error editing listing: ${editResponse.message || response.statusText}`);
    } else {
      document.getElementById('hide-edit-modal').click();
      new bootstrap.Modal(document.querySelector('#success-modal')).show();
    }

        // Get modal element and initialize Bootstrap modal
    const successModalElement = document.querySelector('#success-modal'); 
    const successModal = new bootstrap.Modal(successModalElement, {
      backdrop: true, // Ensures clicking outside will close the modal
      keyboard: true  // Allows pressing "Esc" to close it
  });

    // Add event listener to close modal when clicking anywhere outside of it
    document.addEventListener('click', function (event) {
      if (successModalElement.classList.contains('show')) {
          const modalDialog = successModalElement.querySelector('.modal-dialog'); // The actual modal box
  
          // Ensure modal closes if clicking anywhere outside the modal-dialog
          if (!modalDialog.contains(event.target) && event.target !== successModalElement) {
              successModal.hide(); // Close the modal
          }
      }
  });

    

    return response.json();
  } catch (error) {
    console.error('Edit listing failed:', error);
    throw error;
  }
}
