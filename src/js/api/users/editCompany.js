import { apiPath, companyUrl } from '../constants.js';
import { message } from '../../utilities/message/message.js';
import { getToken } from '../getToken.js';
import { clientProfile } from '../../templates/profile/clientProfile.js';

/**
 * This function sends a PUT request to the API to update the company profile
 *
 * @param {Object} profile The updated company profile data
 * @returns {Promise<Object>} A Promise that resolves with the updated company profile
 * @throws {Error} If the 'id' is missing, the API request fails, or if it returns an error status
 */

export async function editCompany(profile) {
  const id = localStorage.getItem('companyId');
  const profileURL = apiPath + companyUrl + `${id}`;
  const accessToken = getToken();
  const body = JSON.stringify(profile);

  const options = {
    method: 'PUT',
    body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(profileURL, options);
    const profile = await response.json();

    const successMessage = document.getElementById('company-success-modal');

    if (!successMessage) {
      throw new Error('Success modal element not found');
    }

    const closeModal = () => {
      successMessage.close();
      document.body.focus();
      successMessage.style.display = 'none';
      successMessage.removeEventListener('click', closeModal);
    };

    switch (response.status) {
      case 200: {
        successMessage.style.display = 'flex';
        successMessage.showModal();
        successMessage.addEventListener('click', closeModal);

        clientProfile(profile);

        setTimeout(() => {
          closeModal();
          const editProfileModal = document.getElementById('editProfileModal');
          const modalInstance =
            bootstrap.Modal.getInstance(editProfileModal) || new bootstrap.Modal(editProfileModal);
          modalInstance.hide();
        }, 1500);

        return profile;
      }
      default:
        throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (err) {
    message(
      'danger',
      'An error occured when attempting to edit company details',
      '#editCompanyErrorContainer'
    );
    console.error(err);
  }
}
