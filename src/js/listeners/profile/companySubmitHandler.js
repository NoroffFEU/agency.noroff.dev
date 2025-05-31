import { editCompany } from '../../api/users/editCompany.js';

/**
 * Handles the submission of the company profile form.
 * It collects the form data, filters out empty values, and submits the profile for editing.
 *
 * @param {Object} profileData - The current company profile data.
 * @returns {Function} A function that handles the form submission event.
 */
export function companySubmitHandler(profileData) {
  return function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const filteredFormData = new FormData();
    for (const [key, value] of formData.entries()) {
      if (value !== '') {
        filteredFormData.append(key, value);
      }
    }
    const profile = Object.fromEntries(filteredFormData.entries());
    if (profileData.company.name === profile.name) {
      delete profile.name;
    }
    return editCompany(profile);
  };
}
