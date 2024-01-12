/**
 * Filters an array of user/listing data based on a search term.
 * @param {Array} userData - An array of user data objects.
 * @param userName - The name of the user.
 * @param userEmail - The email of the user.
 *
 * @param {Array} listingData - An array of listing data objects.
 * @param id - The id of the listing.
 * @param jobTitle - The job title of the listing.
 * @param companyName - The company name of the listing.
 *
 * @param {string} term - The search term to filter by.
 * @returns {Array} - An array of user/listing data objects that match the search term.
 */

export function getSearchTermsUsers(userData, term) {
  return userData.filter((user) => {
    const userName = user.name.toLowerCase();
    const userEmail = user.email.toLowerCase();
    return userName.includes(term) || userEmail.includes(term);
  });
}

export function getSearchTermsListings(listingData, term) {
  return listingData.filter((listing) => {
    const id = listing.id;
    const jobTitle = listing.name.toLowerCase();
    const companyName = listing.company.name.toLowerCase();
    return jobTitle.includes(term) || companyName.includes(term) || id === parseInt(term);
  });
}
