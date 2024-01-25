import { editCompany } from '../../api/users/editCompany.js';
import { editStudent } from '../../api/users/editStudent.js';

export function handleEditForms() {
  const studentForm = document.querySelector('#editStudentProfile');
  const companyForm = document.querySelector('#editCompanyProfile');

  if (studentForm) {
    studentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      
      console.log(profile)
      return editStudent(profile);
    });
  }

  if (companyForm) {
    companyForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      console.log(formData)
      const filteredFormData = new FormData();
      console.log(filteredFormData)
      // Iterate over the entries and add non-empty ones to the new FormData
      for (const [key, value] of formData.entries()) {
        if (value !== '') {
          filteredFormData.append(key, value);
        }
      }
      const profile = Object.fromEntries(filteredFormData.entries());
      console.log(profile)
      return editCompany(profile);
    });
  }
}
