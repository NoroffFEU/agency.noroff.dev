// Author: May-Tove Hovdal
//Updated by Fredrik Tokle
import { getSingleListing } from '../../api/posts/getSingleListing.js';
import * as template from '../../templates/listings/index.js';

export async function viewSingleListing() {
const url = new URL(location.href);
 const id = url.searchParams.get('id');

 console.log(document)
  const metaDescription = document.querySelector('#metaDescription');
  const pageTitle = document.querySelector('#singleListingPageTitle');
  const container = document.querySelector('#singleListingContainer');

  if (id) {
    const result = await getSingleListing(id);
   console.log(result)
    metaDescription.content = result.description;
    pageTitle.innerHTML = `${result.title} | Noroff Job Agency`;

    container.append(template.singleListingTemplate(result));

    //Only calling this here to be able to work on edit and delete, will eventually only be called in if statement below
    template.options();

    // The code below is commented out to be able to work on edit and delete functions. The code has also not been checked if it actually works due to not being able to login yet.

    /*
    // Load profile from storage, if user module is still not merged, global localStorage method can be used instead
    const profile = new Store('profile').state;

    // Logic
    if (profile.name === listing.company) {
      // show edit and delete button for the logged in company's own listings
      template.options();
    } else if (profile.role === 'Company') {
      // Remove "apply to job" button for all company users
      const buttonContainer = document.querySelector('.buttonContainer');
      buttonContainer.classList.add('d-none');
    }
    */
  }
}
