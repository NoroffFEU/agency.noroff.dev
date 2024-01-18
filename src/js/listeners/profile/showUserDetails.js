// import headers for the requestOption
import { headers } from '../../api/headers.js';

// Import API url for fetch the data (dummy API for users data)
const apiPath = 'https://cors.noroff.dev/https://agency-api.noroff.dev/';

// Import API url for fetch the data (userDetailsTemplate)
import { createProfileContent } from '../../templates/profile/createProfileContent.js';

export async function showUserDatails() {
  const userUrl = apiPath + `users/` + JSON.parse(localStorage.getItem('id'));

  const reqOption = {
    method: 'GET',
    headers: headers(),
  };
  const response = await fetch(userUrl, reqOption);
  const data = await response.json();
  createProfileContent(data);
  /**
   * THIS IS NOT IDEAL, but as a temporary fix. 
   * The {object}.company.id should be stored during login of the user, instead of storing it here
   * If this gets fixed, it needs to be addressed a little different inside src/js/users/editCompany.js 
   * You can see this is retrieved there in localStorage. This is for editing the Client profile
   * */ 
  if(data.company){
    localStorage.setItem('companyId', data.company.id);
  }
}
