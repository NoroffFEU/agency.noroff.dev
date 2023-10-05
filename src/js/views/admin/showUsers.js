// Author: Linus Aakerberg
// Team: FE-Offers

// Import API url for fetch the data (dummy API for users data)
import { dummyApiUrl } from '../../api/constants.js';
// import headers for the requestOption
import { headers } from '../../api/headers.js';
// import deleteUser function
import { deleteUser } from './deleteUsers.js';
//import { deleteUserApi } from './deleteUsers.js';

const fetchUser = document.querySelector('#userProfile');
// fetchUserSkills = profileSkills out puts profile skills
const fetchUserSkills = document.querySelector('#userProfileSkills');

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

      const userData = json;

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
        // role = get unique profile role
        const profileRole = userData[i].role;
        // profileSkills = get unique profile skills
        const profileSkills = userData[i].skills;
        //profileAvatar = get unique profile avata
        const profileAvatar = userData[i].avatar;

        console.log('Avatar', profileAvatar);

        fetchUser.innerHTML += `    
         <tr>
        <img class="rounded-circle d-block mx-auto w-25" id="profileImage" src="${profileAvatar}" alt="" />
        <h1 class="text-center mt-3 fw-bolder" id="profileName">${profileName}</h1>
        <p id="profileRole" class="text-center fs-2 fw-lighter">${profileRole}</p>
        <p id="profileEmail" class="text-center fs-2 fw-lighter">${profileEmail}</p>
        <p id="profileId" class="text-center fs-2 fw-lighter">${profileId}</p>
        <p id="profileSkills" class="text-center fs-2 fw-lighter">${profileSkills}</p> 
      </tr> 
      <tr>
        <th scope="row">${profileName}</th>
        <td>${profileEmail}</td>
        <td>
        <button class="btn btn-sm" id="deleteUserBtn"><img src="/src/assets/icons/delete-black.svg" alt="Delete button" class="footerIcon" /></button>
        </td>
      </tr>
        `;
        fetchUserSkills.innerHTML += `    
        <tr>
        <p id="profileSkills" class="text-center fs-2 fw-lighter">${profileSkills}</p> 
      </tr>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  }

  getUsers();
}

showUsers();
