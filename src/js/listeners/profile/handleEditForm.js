import { editCompany } from '../../api/users/editCompany.js';
import { editStudent } from '../../api/users/editStudent.js';

export function handleEditForms() {
  const studentForm = document.getElementById('editStudentProfile');
  const companyForm = document.getElementById('editCompanyProfile');

  if (studentForm) {
    studentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      return editStudent(profile);
    });
  }

  if (companyForm) {
    companyForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      return editCompany(profile);
    });
  }
}
