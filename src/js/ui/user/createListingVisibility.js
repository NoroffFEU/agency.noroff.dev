const isCompany = localStorage.getItem('role');
const newListing = document.getElementById('companyListing');

/**
 * @description Toggles the visiblity of the "new listing +" anchor tag link which directs users to a new page.
 * The function checks whether the element exists on the DOM. If it does, it will continue.
 * If the user has the role "Client", it will clear it of the class "d-none" and add the class "d-block", allowing only the user with the role "Client" to have the anchor tag link visible.
 *
 * @function newListingOption
 * @returns {void} this function doesn't return anything back.
 */
export function newListingOption() {
  if (newListing) {
    if (isCompany === '"Client"') {
      newListing.classList.remove('d-none');
      newListing.classList.add('d-block');
    } else {
      newListing.classList.remove('d-block');
      newListing.classList.add('d-none');
    }
  }
}
