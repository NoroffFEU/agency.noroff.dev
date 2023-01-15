export function companyTemplate(data) {}

export function renderCompanyListings(data) {
  const { listing } = data;

  const listings = document.createElement('div');

  listing.forEach((object) => {
    // const { } = object;
    const listing = document.createElement('div');
    const image = document.createElement('img');

    const body = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');

    const details = document.createElement('div');
    const viewButton = document.createElement('button');
    const applicants = document.createElement('p');
    const expires = document.createElement('p');

    // Element classes
    listing.classList.add('d-flex');
    details.classList.add('d-flex');
    body.classList.add('p-2');

    // Appending
    details.append(applicants, expires, viewButton);
    body.append(title, description, details);
    listing.append(image, body);
    listings.append(listing);

    return listing;
  });

  return listings;
}
