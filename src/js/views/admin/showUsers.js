// Author: Linus Aakerberg
// Team: FE-Offers

const fetchUser = document.querySelector('#userProfile');

// Import API url for fetch the data
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
      console.log(response.ok);
      console.log(userData.users);

      for (let i = 0; i < userData.length; i++) {
        console.log(json.users[i]);
        const profileName = userData[i].firstName + ` ` + userData[i].lastName;
        const profileEmail = userData[i].email;
        console.log(profileName);

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
