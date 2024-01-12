import { showRegForm } from '../../ui/user/register/registerUserUi.js';

export const showRegFormListener = () => {
  const companyReg = document.getElementById('companyReg');
  const studentReg = document.getElementById('studentReg');

  if (studentReg) {
    studentReg.addEventListener('click', () => {
      showRegForm('studentReg');
    });
  }

  if (companyReg) {
    companyReg.addEventListener('click', () => {
      showRegForm('companyReg');
    });
  }
};
