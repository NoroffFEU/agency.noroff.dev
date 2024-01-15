// Author: Linus Aakerberg
// Team: FE-Offers

// Import API url for fetch the data (dummy API for users data)
import { apiPath } from '../../api/constants.js';
// import headers for the requestOption
import { headers } from '../../api/headers.js';

// import delete function

const userUrl = apiPath + `users`;

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

      for (let i = 0; i < listingData.length; i++) {
        /* API DUMMY - Fetch from user profiles and added company name + title */
        // Cleaning up name from the API call.
        // jobTitle = Company title and department
        const jobTitle =
          listingData[i].company.title + ` ` + `[ ${listingData[i].company.department} ]`;
        // jobCompany = Company name
        const jobCompany = listingData[i].company.name;
        // jobId = Fetching the postalCode from the company to symbolize an fake-ID number.
        const jobId = listingData[i].company.address.postalCode;

        /* The styling of these elements are not consistent as the placeholders are to small to fit the information needed so a decition has to be made as to how big the listings should be */
        // eslint-disable-next-line no-undef
        jobListings.innerHTML += `
        <div class="card flex-row p-0 gap-4 w-auto">
          <img src="https://via.placeholder.com/150 " alt="" class="" />
          <div class="d-flex flex-column gap-2 me-3">
            <h3>${jobCompany}</h3>
            <p>${jobTitle}#-${jobId}</p>
            <p>Some text from the company</p>
            <div class="d-flex gap-2 align-content-center align-items-center">
              <p>() Applications</p>
              <p>Ends at:</p>
              <button class="btn btn-info text-white">View</button>
              <button class="btn btn-sm btn${jobId}" id="deleteUserBtn">
                <img src="/public/assets/icons/delete-black.svg" alt="Delete button" class="footerIcon" />
              </button>
            </div>
          </div>
        </div>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  }

  getListings(userUrl);
}
