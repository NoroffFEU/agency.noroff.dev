// Author: May-Tove Hovdal

export function singleListingTemplate(listing) {
  // Content will be updated and altered better when we are provided with correct endpoints, using dummy API for now
  const column = document.createElement('div');
  column.className = 'col-lg-6';

  const card = document.createElement('div');
  card.className = 'card bg-theme-light border-0';

  const img = document.createElement('img');
  img.className = 'card-img-top';
  img.src = listing.thumbnail;

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body d-flex flex-column gap-1 p-sm-3 p-md-5';

  const cardTitle = document.createElement('h1');
  cardTitle.className = 'card-title';
  cardTitle.innerText = listing.title;

  const smallText = document.createElement('small');
  smallText.innerHTML = `${listing.brand} <span>&#x2022;</span> ${listing.category} <span>&#x2022;</span> ${listing.price}`;

  const description = document.createElement('p');
  description.innerText = listing.description;

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'd-flex align-items-center gap-2 my-3 buttonContainer';

  const applyBtn = document.createElement('a');
  applyBtn.className = 'btn btn-theme-secondary text-uppercase w-100 rounded-0 applyBtn';
  applyBtn.innerText = 'Apply for job';

  const favBtn = document.createElement('button');
  favBtn.className = 'btn btn-theme-light';

  // Will be updated when i have assets
  const favIcon = document.createElement('img');
  favIcon.src = '/src/assets/icons/heart-fav.svg';
  favIcon.style = 'width: 30px';

  column.append(card);
  card.append(img, cardBody);
  cardBody.append(cardTitle, smallText, buttonContainer, description);
  buttonContainer.append(applyBtn, favBtn);
  favBtn.append(favIcon);

  return column;
}
