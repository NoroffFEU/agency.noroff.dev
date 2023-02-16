export function modalToggle() {
  const studentButton = document.getElementById('studentModalButton');
  const companyButton = document.getElementById('companyModalButton');

  const studentForm = document.getElementById('editStudentProfile');
  const companyForm = document.getElementById('editCompanyProfile');

  studentButton.addEventListener('click', (e) => {
    if (e.target === studentButton) {
      studentForm.classList.remove('d-none');
      companyForm.classList.add('d-none');
    }
  });

  companyButton.addEventListener('click', (e) => {
    if (e.target === companyButton) {
      companyForm.classList.remove('d-none');
      studentForm.classList.add('d-none');
    }
  });

  return;
}
