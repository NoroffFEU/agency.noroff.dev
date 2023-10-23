// Author: Hanna Fjeldsaa
// Team: origin-bliss

// Import API url to fetch the data (dummy API for users data)
import { apiPath } from '../../api/constants.js';

const userUrl = apiPath + `users`;

export async function showApplicants(url, data) {
  try {
    const reqOption = {
      method: 'GET',
      'Content-Type': 'application/json',
      body: JSON.stringify(data),
    };
    const response = await fetch(userUrl, reqOption);
    const json = await response.json();
    const applicantData = json.users;

    applicantTemplate(applicantData);
  } catch (error) {
    console.log(error);
    return 'Bye';
  }
}

export async function applicantTemplate(applicantData) {
  var applicant = '';
  if (applicantData !== undefined && applicantData !== null && applicantData !== '') {
    for (let i = 0; i < applicantData.length; i++) {
      /* API DUMMY - Fetch from user profiles, company name and title, id and applicant data in a modal */
      // applicantsName = get and combine both firstName and lastName under same const
      const applicantsName = applicantData[i].firstName + ` ` + applicantData[i].lastName;
      // applicationCreated = Time and date of application creation. Unsure about format.
      const applicationCreated = '09:30 <br> 30/05/2023';
      // applicantEmail = get the applicant email
      const applicantEmail = applicantData[i].email;
      // applicantAddress = get the applicant Address
      const applicantAddress = applicantData[i].address.address + `, ` + applicantData[i].address.city + ` ` + applicantData[i].address.state + ` ` + applicantData[i].address.postalCode;
      // applicantPhone = get the applicant phone number
      const applicantPhone = applicantData[i].phone;
      // applicationTitle = Title of application
      const applicationTitle = 'Lorem!';
      // applicationTitle = Text from application
      const applicationText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras. Ut faucibus pulvinar elementum integer enim neque. <br><br>Bibendum enim facilisis gravida neque convallis a cras. Ut faucibus pulvinar elementum integer enim neque.';
      // applicationLink = get registered link
      const applicationLink = applicantData[i].image;
      // applicationLink = Registered file
      const applicationFile = 'ExampleFilename.pdf';
      // jobTitle = get application job title
      const jobTitle = applicantData[i].company.title;
      // companyName = get Company name
      const companyName = applicantData[i].company.name;
      // applicationId = get the postalCode from the company to symbolize an fake-ID number.
      const applicationId = applicantData[i].company.address.postalCode;

      applicant = `
      <tr>
        <th scope="row" class="applicant-modal" data-bs-toggle="modal" data-bs-target="#applicantModal${i}">${applicantsName}</th>
        <div class="modal fade applicant" id="applicantModal${i}" tabindex="-1" aria-labelledby="applicantModalLabel${i}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content rounded-0 border-0">
                    <div class="close-btn-content">
                      <div class="close-btn float-end">
                        <button type="button" class="btn-close btn-close-white rounded-0" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                    </div>
                    <div class="modal-header border-0 align-items-center px-4 pb-0 mt-5 fw-normal">
                      <h1 class="modal-title" id="applicantModalLabel${i}">${applicantsName}</h1>
                      <p class="m-0 time-date"> ${applicationCreated} </p>
                    </div>
                    <div class="modal-body px-4 pt-0">
                      <p class="py-3 fw-normal">
                        <span > ${applicantEmail} </span>
                        <br />
                        <span > ${applicantAddress} </span>
                        <br />
                        <span > ${applicantPhone} </span>
                      </p>
                      <p>${applicationTitle}</p>
                      <p class="fw-normal mb-4">${applicationText}</p>
                      <p>${applicantsName}</p>
                      <a href="${applicationLink}" class="list-group-item fw-normal fst-italic"><img src="/public/assets/icons/linkApplicant.svg" alt="Link icon" class="footerIcon me-3" /> ${applicationLink}</a>
                      <a href="#" class="list-group-item fw-normal mt-2"><img src="/public/assets/icons/download.svg" alt="File icon" class="footerIcon me-3" download/> ${applicationFile}</a>
                    </div>
                    <div class="modal-footer border-0 px-4 my-4 justify-content-start">
                      <button type="button" class="btn rounded-0">DELETE</button>
                    </div>
                  </div>
                </div>
              </div>
        <td class="job-title">${jobTitle}</td>      
        <td class="company-name">${companyName}</td>
        <td class="applicant-id">#-${applicationId}</td>
        <td>
            <button class="btn btn-sm applicant-delete-btn"><img src="/public/assets/icons/delete-black.svg" alt="Delete button" class="footerIcon" /></button>
        </td>
      </tr>
      `;

      if (typeof document !== 'undefined') {
        const fetchApplicants = document.querySelector('#applicants');

        fetchApplicants.innerHTML += applicant;
      }
    }
    return applicant;
  } else {
    console.log('No application data found.');
  }
}
