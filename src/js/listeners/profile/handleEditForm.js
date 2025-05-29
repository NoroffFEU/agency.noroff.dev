import { editCompany } from '../../api/users/editCompany.js';
import { editStudent } from '../../api/users/editStudent.js';

/**
 * This function handles the submission of edit forms for student and company profiles.
 * @param {Object} profileData - The current profile data to be used for editing.
 * @returns {void}
 * @example
 * ```
 * handleEditForms(profileData);
 * ```
 */
export function handleEditForms(profileData) {
  const studentForm = document.querySelector('#editStudentProfile');
  const companyForm = document.querySelector('#editCompanyProfile');

  if (studentForm) {
    studentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const filteredFormData = new FormData();
      const degreeSelects = form.querySelectorAll('select[name="degree"]');

      // Iterate over the entries and add non-empty ones to the new FormData
      for (const [key, value] of formData.entries()) {
        if (value !== '') {
          filteredFormData.append(key, value);
        }
      }
      const profile = Object.fromEntries(filteredFormData.entries());

      const degrees = Array.from(degreeSelects)
        .map((select) => select.value.trim())
        .filter(Boolean); // Remove empty values
      profile.offers = degrees.join(',');

      return editStudent(profile);
    });
  }

  if (companyForm) {
    companyForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const filteredFormData = new FormData();

      // Iterate over the entries and add non-empty ones to the new FormData
      for (const [key, value] of formData.entries()) {
        if (value !== '') {
          filteredFormData.append(key, value);
        }
      }

      const profile = Object.fromEntries(filteredFormData.entries());

      /* Temporary workaround solution for the company name field, as API gives err 400 if company name is not changed
       * The API still throws error 400 randomly when updating the company profile,but it still updates the profile
       * May send ticket to API team to fix this issue?
       */
      console.log('Profile data:', profileData.company.name, 'profile name:', profile.name);
      if (profileData.company.name === profile.name) {
        delete profile.name; // Remove the name field if it hasn't changed
      }
      console.log('Profile after modification:', profile);
      return editCompany(profile);
    });
  }
}
