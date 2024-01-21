import { showRegForm } from '../../ui/user/register/registerUserUi.js';
/**
 * function that shows eighter the student form or the company form depending if the argument of studentReg and companyReg is truthy,
 * meaning if studentReg is truthy the studennt form will show.
 */
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
