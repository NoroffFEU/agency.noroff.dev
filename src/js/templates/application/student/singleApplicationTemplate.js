import {
  authBaseFetchOpen
} from "/src/js/api/apiBaseFetch.js";
import {
  dummyApiUrl,
  dummyApiGetSingel
} from '../../../api/constants.js'


/**
 * Creates the HTML for a single application
 * @param {object} data - The single application data fetched from the API
 * @returns - The HTML for a single application
 */
export async function singleApplicationTemplate() {

  const url = dummyApiUrl + dummyApiGetSingel;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(),
  }

  const req = await authBaseFetchOpen(url, options)
  const res = await req.json()
  const data = res
  console.log(data)


  const {
    media,
    title: listingTitle,
    jobTitle,
    companyName,
    location,
    listingCreated,
    deadline,
    applicantsCount,
    applicantsName,
    applicationCreated,
    email,
    address,
    phone,
    body: applicationText,
    link,
    file,
    id
  } = data;


  const applicationData = document.getElementById('applicationData')

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
  <div class="d-flex gap-3 my-3">
  <button class="btn btn-theme-primary text-uppercase text-white w-100">Apply Now</button>
  <button class="btn btn-theme-secondary"><i class="fa-regular fa-heart"></i></button>
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

  applicationData.append(body)

  return modal;
}