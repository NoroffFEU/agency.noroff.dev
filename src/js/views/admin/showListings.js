// Author: Linus Aakerberg
// Team: FE-Offers

const fetchListings = document.querySelector('#jobListings');

// Import API url for fetch the data (dummy API for users data)
import { dummyApiUrl } from '../../api/constants.js';
// import headers for the requestOption
import { headers } from '../../api/headers.js';

const userUrl = dummyApiUrl + `users`;

export function showListings() {
  async function getListings(url, data) {
    try {
      const reqOption = {
        method: 'GET',
        headers: headers(),
        body: JSON.stringify(data),
      };
      const response = await fetch(userUrl, reqOption);
      const json = await response.json();

      const listingData = json.users;
      console.log(response.ok);

      for (let i = 0; i < listingData.length; i++) {
        /* API DUMMY - Fetch from user profiles and added company name + title */
        // Cleaning up name from the API call.
        // jobTitle = Company title and department
        const jobTitle = listingData[i].company.title + ` ` + `[ ${listingData[i].company.department} ]`;
        // jobCompany = Company name
        const jobCompany = listingData[i].company.name;
        // jobId = Fetching the postalCode from the company to symbolize an fake-ID number.
        const jobId = listingData[i].company.address.postalCode;

        fetchListings.innerHTML += `
        <tr>
        <th scope="row">${jobTitle}</th>
        <td>${jobCompany}</td>
        <td>#-${jobId}</td>
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

  getListings(userUrl);
}

showListings();
