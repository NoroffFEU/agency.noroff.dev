export function singleApplicationTemplate(data) {
  const { media, listingTitle, jobTitle, companyName, location, listingCreated, deadline, applicantsCount, applicantsName, applicationCreated, email, address, phone, applicationText, link, file, id } = data;

  /// Elements
  const card = document.createElement('div');
  const cardHeader = document.createElement('div');
  const cardBody = document.createElement('div');
  const cardFooter = document.createElement('div');
  const img = document.createElement('img');
  const exitBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  /// Content
  img.src = media;
  img.alt = listingTitle;
  exitBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  deleteBtn.textContent = 'delete';

  cardBody.innerHTML = `
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
  <p>${applicationText}</p>
  <ul class="list-unstyled my-5 d-flex flex-column gap-2">
  <li class="fst-italic">
    <span><i class="fa-solid fa-link"></i></span> <a href="#" class="text-decoration-none text-reset">${link}</a>
  </li>
  <li>
    <span><i class="fa-solid fa-download"></i></span>${file}
  </li>
</ul>`;

  /// Classes
  card.classList.add('card', 'container-md', 'border-0', 'rounded-0', 'p-0', 'bg-light', 'text-capitalize', 'col-lg-8', 'col-xl-6', 'm-auto');
  cardHeader.classList.add('position-relative');
  img.classList.add('card-img-top', 'rounded-0');
  exitBtn.classList.add('btn', 'position-absolute', 'end-0', 'fs-4');
  cardBody.classList.add('card-body', 'p-4');
  cardFooter.classList.add('d-grid', 'd-sm-block', 'p-4');
  deleteBtn.classList.add('btn', 'btn-dark', 'px-5', 'rounded-1', 'text-uppercase');

  /// Append
  cardHeader.append(exitBtn, img);
  cardFooter.append(deleteBtn);
  card.append(cardHeader, cardBody, cardFooter);

  return card;
}
