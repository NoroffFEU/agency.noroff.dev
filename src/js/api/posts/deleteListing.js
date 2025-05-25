import { apiUrl, listingsUrl } from '../constants.js';
import { headers } from '../headers.js';

/**
 * Initializes delete functionality.
 * Hides the delete button if the user is not logged in.
 */
export function deleteItem() {
  const deleteButton = document.querySelector('#delete-button-on-listing-screen');
  const deleteModalElement = document.getElementById('deleteListingModal');
  const deleteModal = new bootstrap.Modal(deleteModalElement);
  const accessToken = localStorage.getItem('token');

  if (!accessToken) {
    deleteButton?.classList.add('hidden');
    return;
  }

  deleteButton?.classList.remove('hidden');
  deleteButton?.addEventListener('click', () => deleteModal.show());

  deleteModalElement.addEventListener('click', async (event) => {
    if (event.target.id === 'cancel-delete-listing-btn') deleteModal.hide();
    if (event.target.id === 'confirm-delete-listing-btn') await deleteListing();
  });
}

/**
 * Deletes a listing and redirects correctly after success.
 */
async function deleteListing() {
  const accessToken = localStorage.getItem('token');
  if (!accessToken) return alert('You must be logged in.');

  const id = new URLSearchParams(window.location.search).get('id');
  if (!id) return alert('Listing ID is missing.');

  try {
    const response = await fetch(`${apiUrl}${listingsUrl}/${id}`, {
      method: 'DELETE',
      headers: headers('application/json'),
    });

    if (!response.ok) {
      const error = await response.json();
      alert(`Error: ${error.message || response.statusText}`);
      return;
    }

    const successModalElement = document.getElementById('success-delete-modal');
    if (successModalElement) {
      const successModal = new bootstrap.Modal(successModalElement, {
        backdrop: 'static',
        keyboard: false,
      });
      
      successModal.show();

      successModalElement.addEventListener('hidden.bs.modal', () => {
        window.location.href = '/pages/listings/index.html';
      });
      
      setTimeout(() => {
        successModal.hide();
        window.location.href = '/pages/listings/index.html';
      }, 2000);
    } else {
      window.location.href = '/pages/listings/index.html';
    }
  } catch (error) {
    console.error('Delete failed:', error);
    alert('Something went wrong. Please try again.');
  }
}
