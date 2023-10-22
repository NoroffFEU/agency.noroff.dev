// import headers for the requestOption
import { headers } from '../../api/headers.js';
// Import API url for fetch the data (dummy API for users data)
import { apiPath } from '../../api/constants.js';

// Import API url for fetch the data (userDetailsTemplate)
import { userDetailsTemplate } from '../../templates/profile';

export async function showUserDatails() {
  const userUrl = apiPath + `users/` + JSON.parse(localStorage.getItem('id'));

  const reqOption = {
    method: 'GET',
    headers: headers(),
  };
  const response = await fetch(userUrl, reqOption);
  const data = await response.json();
  userDetailsTemplate(data);
}
