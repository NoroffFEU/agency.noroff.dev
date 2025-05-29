import { studentSubmitHandler } from './studentSubmitHandler.js';
import { companySubmitHandler } from './companySubmitHandler.js';

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

  if (studentForm && profileData.role === 'Applicant') {
    console.log('Handling student form submission');
    studentForm.removeEventListener('submit', studentSubmitHandler);
    studentForm.addEventListener('submit', studentSubmitHandler);
  }

  if (companyForm && profileData.role === 'Client') {
    companyForm.removeEventListener('submit', companyForm._handler);
    companyForm._handler = companySubmitHandler(profileData);
    companyForm.addEventListener('submit', companyForm._handler);
  }
}
