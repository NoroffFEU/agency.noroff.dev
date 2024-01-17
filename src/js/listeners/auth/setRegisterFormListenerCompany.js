import { registerUser, registerCompany } from '../../api/auth/index.js';

export function setRegisterFormListenerCompany() {
  const form = document.querySelector('#registerForm-company');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const formData = new FormData(event.target);      
      const formEntries = Object.fromEntries(formData.entries());
      const userNameArray = formEntries.name.split(' ');

      const userData = {
        firstName: userNameArray[0],
        lastName: userNameArray.slice(1).join(' '),
        email: formEntries.email,
        password: formEntries.password,
        role: 'Client',
      };
      
      try {
        const userResult = await registerUser(userData);    
        const userProfile = userResult.data;
        
        const companyData = {
          name: formEntries.name,                
          email: formEntries.email,
          sector: formEntries.sector,
          website: formEntries.website,  
          phone: formEntries.phone,    
          logo: "", // TODO: Add logo
          admin: userProfile.id,        
          registerToken: userProfile.token,
        };

        const companyResult = await registerCompany(companyData);
        console.log(companyResult);

      } catch (error) {        
        console.log('error:', error);
      } 
      
    });
  }
}
