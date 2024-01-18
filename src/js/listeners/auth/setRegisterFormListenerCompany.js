import { registerUser, registerCompany } from '../../api/auth/index.js';
import getCompanies from '../../api/company/companies.js';

export function setRegisterFormListenerCompany() {
  const form = document.querySelector('#registerForm-company');

  if (form) {
    form.addEventListener('submit', async (event) => {        

      event.preventDefault();

      const successElement = document.querySelector('#registrationSuccessMessage');
      const errorElement = document.querySelector('#registrationErrorMessage');
      
      const formData = new FormData(event.target);      
      const formEntries = Object.fromEntries(formData.entries());      

      const companyNameExists = await checkCompanyNameExists(formEntries.name);
      if (companyNameExists) {
        showMessage(errorElement, `Company name <strong>${formEntries.name}</strong> already exists`);        
        return;
      }

      const userNameArray = formEntries.name.split(' ');
      const userPayload = {
        firstName: userNameArray[0],
        lastName: userNameArray.slice(1).join(' '),
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
          name: formEntries.name,                
          email: formEntries.email,
          sector: formEntries.sector,
          website: formEntries.website,  
          phone: formEntries.phone,    
          logo: "", // TODO: Add logo
          admin: userProfile.id,        
          registerToken: userProfile.token,
        };

        const companyResult = await registerCompany(companyPayload);
        if (companyResult.error) {
          throw new Error(companyResult.error);
        }         

      removeMessage(errorElement);
      showMessage(successElement, `Company <strong>${formEntries.name}</strong> registered successfully! <a href="/pages/auth/login/index.html">Login</a> to continue.`);

      } catch (error) {        
        showMessage(errorElement, `Error: ${error.message}`);        
      }       
    });
  }
}

async function checkCompanyNameExists(name) {
  const companyList = await getCompanies();
  return companyList.some(company => company.name === name);  
}

function showMessage(element,message) {  
  element.classList.remove('d-none');
  element.innerHTML = message;
}

function removeMessage(element) {  
  if (!element.classList.contains('d-none')) {
    element.classList.add('d-none');
  }  
  element.innerHTML = '';
}