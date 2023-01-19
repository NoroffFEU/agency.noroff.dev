// Author: Linus Aakerberg
// Team: FE-Offers

const fetchUser = document.querySelector('#userProfile');

// Import API url for fetch the data (dummy API for users data)
import { dummyApiUrl } from '../../api/constants.js';
// import headers for the requestOption
import { headers } from '../../api/headers.js';

const userUrl = dummyApiUrl + `users`;

export function showUsers() {
  async function getUsers(url, data) {
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
        // Get and combine both firstName and lastName under same const
        const profileName = userData[i].firstName + ` ` + userData[i].lastName;
        // Get email registered and cleaner during one const
        const profileEmail = userData[i].email;

        fetchUser.innerHTML += `
        <tr>
        <th scope="row">${profileName}</th>
        <td>${profileEmail}</td>
        <td>
          <button class="btn btn-sm"><img src="/src/assets/icons/delete-black.svg" alt="Delete button" class="footerIcon" /></button>
        </td>
      </tr>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  }

  getUsers(userUrl);
}

showUsers();
