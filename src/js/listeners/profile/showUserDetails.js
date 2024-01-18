// import headers for the requestOption
import { headers } from '../../api/headers.js';

// Import API url for fetch the data (dummy API for users data)
const apiPath = 'https://cors.noroff.dev/https://agency-api.noroff.dev/';

// Import API url for fetch the data (userDetailsTemplate)
import { userDetailsTemplate } from '../../templates/profile/userDetailsTemplate.js';

export async function showUserDatails() {
  const userUrl = apiPath + `users/` + JSON.parse(localStorage.getItem('id'));

  const reqOption = {
    method: 'GET',
    headers: headers(),
  };
  const response = await fetch(userUrl, reqOption);
  const data = await response.json();
  userDetailsTemplate(data);
  localStorage.setItem('companyId', data.company.id);
}
