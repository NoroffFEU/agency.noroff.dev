import { registerUser, registerCompany } from '../../api/auth/index.js';
import getCompanies from '../../api/company/companies.js';
import { message } from '../../utilities/message/message.js';
import { inputs } from './validateInputs.js';

/**
 * function that gets the form input from the company form and stores it,
 * it then registers the company and if it fails the user gets an error message
 */
export function setRegisterFormListenerCompany() {
  const form = document.querySelector('#registerForm-company');

  if (form) {
    const email = form.querySelector('#userEmail');
    const companyName = form.querySelector('#companyName');
    const password = form.querySelector('#userPassword');
    const repeatPassword = form.querySelector('#userConfirmPassword');
    const sector = form.querySelector('#companySector');
    const userName = form.querySelector('#userName');

    email.addEventListener('blur', () => {
      inputs.validateCompanyEmail(email, false);
    });
    companyName.addEventListener('blur', (event) => {
      inputs.validateCompanyName(event.target, false);
    });
    password.addEventListener('blur', () => {
      inputs.validatePassword(password, false);
    });
    repeatPassword.addEventListener('blur', () => {
      inputs.validateRepeatPassword(password, repeatPassword, false);
    });
    sector.addEventListener('blur', () => {
      inputs.validateSector(sector, false);
    });
    userName.addEventListener('blur', (event) => {
      inputs.validateUserName(event.target, false);
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const successElement = document.querySelector('#registrationSuccessMessage');
      const errorElement = document.querySelector('#errorMessage');

      const isEmailValid = inputs.validateCompanyEmail(email);
      const isCompanyNameValid = inputs.validateCompanyName(companyName);
      const isPasswordValid = inputs.validatePassword(password);
      const isRepeatPasswordValid = inputs.validateRepeatPassword(password, repeatPassword);
      const isSectorValid = inputs.validateSector(sector);
      const isUserNameValid = inputs.validateUserName(userName);

      if (
        !isEmailValid ||
        !isCompanyNameValid ||
        !isPasswordValid ||
        !isRepeatPasswordValid ||
        !isSectorValid ||
        !isUserNameValid
      ) {
        message('danger', 'Invalid registration credentials. Please try again', '#errorMessage');
        return;
      }

      const formData = new FormData(event.target);
      const formEntries = Object.fromEntries(formData.entries());

      const companyNameExists = await checkCompanyNameExists(formEntries.name);
      if (companyNameExists) {
        showMessage(
          errorElement,
          `Company name <strong>${formEntries.name}</strong> already exists`
        );
        return;
      }

      const nameParts = formEntries.user.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const userPayload = {
        firstName: firstName,
        lastName: lastName,
        email: formEntries.email,
        password: formEntries.password,
        role: 'Client',
      };

      try {
        const userResult = await registerUser(userPayload);
        const userProfile = userResult.data;

        if (userResult.error) {
          throw new Error(userResult.error);
        }

        const companyPayload = {
          name: formEntries.companyName,
          email: formEntries.email,
          sector: formEntries.sector,
          website: formEntries.website,
          phone: formEntries.phone,
          logo: '', // TODO: Add logo
          admin: userProfile.id,
          registerToken: userProfile.token,
        };

        const companyResult = await registerCompany(companyPayload);
        if (companyResult.error) {
          throw new Error(companyResult.error);
        }

        removeMessage(errorElement);
        showMessage(
          successElement,
          `Company <strong>${formEntries.companyName}</strong> registered successfully! <a href="/pages/auth/login/index.html">Login</a> to continue.`
        );
      } catch (error) {
        showMessage(errorElement, `Error: ${error.message}`);
      }
    });
  }
}

async function checkCompanyNameExists(name) {
  const companyList = await getCompanies();
  return companyList.some((company) => company.name === name);
}

function showMessage(element, message) {
  element.classList.remove('d-none');
  element.innerHTML = message;
}

function removeMessage(element) {
  if (!element.classList.contains('d-none')) {
    element.classList.add('d-none');
  }
  element.innerHTML = '';
}
