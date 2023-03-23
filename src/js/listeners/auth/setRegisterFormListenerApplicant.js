
// Register form for applicant

import { register } from '../../api/auth/index.js';

export function setRegisterFormListenerApplicant(){
 
  const form = document.querySelector('#registerForm-applicant');
  const userFeedback = document.querySelector('.user-feedback');

  if (form) {
    form.addEventListener('submit',async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const imageUrl = document.querySelector("#imageUrl").value; 
      const data = {...profile, imageUrl}
    try{
       // send it to Api
      await register(data);
      window.location.replace('/pages/auth/login/');
     }catch (error) {
        // At the time of writing, API is out of order,
        // But it should display different error messages according to the error received by API.
      userFeedback.innerText = 'An error occurred. Please check the inputs.';
      console.warn('error:', error);
    }
    });
  }
}


