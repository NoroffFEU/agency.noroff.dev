/**
 * Creates the HTML for a single application
 * @param {object} data - The single application data fetched from the API
 * @returns - The HTML for a single application
 */
export function singleApplicationTemplate() {
  /// Placeholders. Needs to be swapped with data parameter
  const data = {
    listingTitle: 'Listing title',
    media: '/src/assets/icons/DefaultPlaceholder.svg',
    jobTitle: 'Job title',
    companyName: 'Company name',
    location: 'Location',
    listingCreated: 'One day ago',
    deadline: 'Deadline date',
    applicantsCount: '48 applicants',
    applicantsName: 'Applicants name',
    applicationCreated: 'Time / date',
    email: 'Email',
    address: 'Address',
    phone: 'Phone number',
    applicationText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum enim facilisis gravida neque convallis a cras. Ut faucibus pulvinar elementum integer enim neque.',
    link: 'Link (Link added by student',
    file: 'File (file added by student)',
  };

  const { media, listingTitle, jobTitle, companyName, location, listingCreated, deadline, applicantsCount, applicantsName, applicationCreated, email, address, phone, applicationText, link, file, id } = data;

  /// Element
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const application = document.createElement('div');
  const header = document.createElement('div');
  const body = document.createElement('div');
  const footer = document.createElement('div');
  const img = document.createElement('img');
  const exitBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  /// Content
  img.src = media;
  img.alt = listingTitle;
  exitBtn.innerHTML = `<i class="fa-solid fa-xmark m-0"></i>`;
  exitBtn.dataset.bsDismiss = 'modal';
  deleteBtn.textContent = 'delete';
  deleteBtn.dataset.auth = 'delete-application';

  body.innerHTML = `
  <h1 class="card-title fw-normal">${listingTitle}</h1>
  <ul class="list-unstyled d-flex gap-1">
    <li>${jobTitle}</li>
    <li>&#47;</li>
    <li>${companyName}</li>
    <li>&#47;</li>
    <li>${location}</li>
  </ul>
  <ul class="list-unstyled d-flex gap-1">
    <li>${listingCreated}</li>
    <li>&#x2022;</li>
    <li>${deadline}</li>
    <li>&#x2022;</li>
    <li>${applicantsCount}</li>
  </ul>
  <hr />
  <div class="d-flex flex-column flex-sm-row justify-content-between">
    <h2 class="fs-2 fw-semibold">${applicantsName}</h2>
    <p>${applicationCreated}</p>
  </div>
  <ul class="list-unstyled">
    <li>${email}</li>
    <li>${address}</li>
    <li>${phone}</li>
  </ul>
  <p class="mt-5">${applicationText}</p>
  <ul class="list-unstyled my-5 d-flex flex-column gap-2">
  <li class="fst-italic">
    <span><i class="fa-solid fa-link"></i></span> <a href="#" class="text-decoration-none text-reset">${link}</a>
  </li>
  <li>
    <span><i class="fa-solid fa-download"></i></span> ${file}
  </li>
</ul>`;

  /// Class and id
  modal.classList.add('modal');
  modalDialog.classList.add('modal-dialog', 'modal-lg');
  application.classList.add('modal-content', 'container-md', 'border-0', 'rounded-0', 'p-0', 'bg-light', 'text-capitalize', 'm-auto');
  header.classList.add('position-relative');
  img.classList.add('card-img-top', 'rounded-0', 'img-responsive');
  exitBtn.classList.add('btn', 'position-absolute', 'end-0', 'fs-4', 'bg-black', 'text-white', 'rounded-0', 'py-0');
  body.classList.add('card-body', 'p-4');
  footer.classList.add('d-grid', 'd-sm-block', 'p-4');
  deleteBtn.classList.add('btn', 'btn-dark', 'px-5', 'rounded-1', 'text-uppercase');

  modal.id = 'modal';

  /// Append
  header.append(exitBtn, img);
  footer.append(deleteBtn);
  application.append(header, body, footer);
  modalDialog.append(application);
  modal.append(modalDialog);

  return modal;
}
