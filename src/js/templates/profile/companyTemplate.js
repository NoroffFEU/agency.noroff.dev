export function companyTemplate(data) {}

export function renderCompanyListings(data) {
  const { listing } = data;

  const listingsContainer = document.createElement('div');

  listing.forEach((listObject) => {
    // const { } = listObject;
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
    listingsContainer.append(listing);

    return listing;
  });

  return listingsContainer;
}

export function renderCompanyApplications(data) {
  const { applications } = data;

  const applicationsContainer = document.createElement('div');

  applications.forEach((appObject) => {
    // const {} = appObject;
    const applicantDetails = document.createElement('div');
    const position = document.createElement('div');
    const candidate = document.createElement('div');
    const appliedDate = document.createElement('div');
    const viewButton = document.createElement('div');

    applicantDetails.classList.add('row');
    position.classList.add('col');
    candidate.classList.add('col');
    appliedDate.classList.add('col');
    viewButton.classList.add('btn col');

    applicantDetails.append(position, candidate, appliedDate, viewButton);
    applicationsContainer.append(applicantDetails);

    return applicantDetails;
  });

  return applicationsContainer;
}

// Missing lo-fi of offers sent.
