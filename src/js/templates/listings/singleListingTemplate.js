// Author: May-Tove Hovdal

export function singleListingTemplate(listing) {
  // Content will be updated and altered better when we are provided with correct endpoints, using dummy API for now
  const column = document.createElement('div');
  column.className = 'col-lg-6';

  const card = document.createElement('div');
  card.className = 'card bg-theme-light border-0 rounded-0';

  const img = document.createElement('img');
  img.className = 'card-img-top rounded-0 imgStyling';
  img.src = listing.thumbnail;

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body d-flex flex-column gap-1 p-sm-3 px-md-5 py-md-4';

  const cardTitle = document.createElement('h1');
  cardTitle.className = 'card-title';
  cardTitle.innerText = listing.title;

  const details = document.createElement('small');
  details.innerHTML = `${listing.brand} <span>&#x2022;</span> ${listing.category} <span>&#x2022;</span> ${listing.price}`;

  const description = document.createElement('p');
  description.innerText = listing.description;

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'd-flex align-items-center gap-2 my-3 buttonContainer';

  const applyBtn = document.createElement('a');
  applyBtn.className = 'btn btn-theme-secondary text-uppercase w-100 rounded-0 applyBtn';
  applyBtn.dataset.auth = 'applyForJob';
  applyBtn.innerText = 'Apply for job';

  const favBtn = document.createElement('button');
  favBtn.dataset.auth = 'favoriteListing';
  favBtn.className = 'btn btn-theme-light';

  const favIcon = document.createElement('img');
  favIcon.className = 'favIconStyling';
  favIcon.src = '/assets/icons/heart-fav.svg';

  column.append(card);
  card.append(img, cardBody);
  cardBody.append(cardTitle, details, buttonContainer, description);
  buttonContainer.append(applyBtn, favBtn);
  favBtn.append(favIcon);

  return column;
}
