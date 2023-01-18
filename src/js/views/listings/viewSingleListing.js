import { getSingleListing } from '../../api/posts/getSingleListing.js';
import * as template from '../../templates/listings/index.js';

export async function viewSingleListing() {
  /*const url = new URL(location.href);
 const id = url.searchParams.get('id');*/

  const id = 1;

  const metaDescription = document.querySelector('#metaDescription');
  const pageTitle = document.querySelector('#singleListingPageTitle');
  const container = document.querySelector('#singleListingContainer');

  if (id) {
    const result = await getSingleListing(id);

    metaDescription.content = result.description;
    pageTitle.innerHTML = `${result.title} | Noroff Job Agency`;

    container.append(template.singleListingTemplate(result));

    // Adds edit and delete button, this will be changed to only be visible if logged in user is owner/company, added for now so we can work on edit and delete function
    template.options();
  } else {
    container.innerHTML = 'Oops! An error occurred trying to load the listing';
  }
}
