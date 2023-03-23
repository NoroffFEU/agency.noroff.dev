// Author: Linus Aakerberg
// Team: FE-Offers

const fetchUser = document.querySelector('#userProfile');

// Import API url for fetch the data (dummy API for users data)
import { dummyApiUrl } from '../../api/constants.js';
// import headers for the requestOption
import { headers } from '../../api/headers.js';
// import setDeleteUserListener function
import { setDeleteUserListener } from '../../listeners/profile/deleteUserHandler.js';

const userUrl = dummyApiUrl + `users`;

export async function showUsers(url, data) {
  try {
    const reqOption = {
      method: 'GET',
      headers: headers(),
      body: JSON.stringify(data),
    };
    const response = await fetch(userUrl, reqOption);
    const json = await response.json();

    const userData = json.users;

    //  For loop to get all the users registered in the dataBase

    for (let i = 0; i < userData.length; i++) {
      /* API DUMMY - Fetch from user profiles and added company name + title */
      // Cleaning up name from the API call.
      // profileName = get and combine both firstName and lastName under same const
      const profileName = userData[i].firstName + ` ` + userData[i].lastName;
      // profileEmail = get email registered
      const profileEmail = userData[i].email;
      // profileId = get unique profile ID
      const profileId = userData[i].id;

      fetchUser.append(showUsersRowTemplate(profileName, profileEmail, profileId));
    }
  } catch (error) {
    console.log(error);
  }
}

const showUsersRowTemplate = (name, email, userId) => {
  const row = document.querySelector('template#userRowTemplate').content.cloneNode(true);

  row.querySelector('[data-show-user-name]').textContent = name;
  row.querySelector('[data-show-user-email]').textContent = email;
  const removeUserBtn = row.querySelector('[data-show-user-remove]');

  setDeleteUserListener(removeUserBtn, userId);

  return row;
};
