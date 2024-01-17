// Author: Emilie Herrera Thomsen

//Updated by : Fredrik Tokle
// Rewrote the function to use createElements, instead of forcing a string into the DOM.
//The function now also uses the API to get the data, instead of using a Lorem Ipsum, but still uses the same structure as before.
//The function also uses the createElements function to create the elements, instead of creating them manually.
//The Api call still comes from a dummy API, but the function is ready to be used with the actual API.
//Deleted the searchListings import as it was never used

import { getListOfListings } from '../../api/posts/getListOfListings.js';
import { createElement } from '../CreateHtml.js';
import { parseDate } from '../../utilities/parse/parse.js';

export const renderListings = async (listings) => {
  const listingsContainer = document.querySelector('.listingContainer');

  listingsContainer.innerHTML = '';

  const listings = await getListOfListings();
  
  listings.forEach((listing) => {
    console.log(listing)
    const listingCards = createListings(listing);
    listingsContainer.append(listingCards);
  });
};



const createListings = ({ title, description, company, deadline }) => {
  const element = createElement('div', ['col-12', 'col-lg-6']);
  const elementRow = createElement('div', [
    'row',
    'p-2',
    'px-3',
    'g-3',
    'bg-theme-light',
    'm-0',
    'shadow',
  ]);
  const imgContainer = createImgContainer(company, title);
  const cardBody = createCardBody(title, description, deadline, id);
  elementRow.append(imgContainer, cardBody);
  element.append(elementRow);

  return element;
};

const createImgContainer = ({ logo, name }) => {
  const element = createElement('div', [
    'm-0',
    'p-3',
    'col-3',
    'd-flex',
    'flex-column',
    'justify-content-center',
  ]);
  const img = createElement('img', ['img-fluid', 'rounded-start'], null, null, null, logo, name);
  element.append(img);
  return element;
};
const createCardBody = (title, description, deadline, id) => {
  const element = createElement('div', [
    'm-0',
    'col-9',
    'd-flex',
    'flex-column',
    'gap-2',
    'align-items-baseline',
  ]);
  const cardBody = createElement('div', ['card-body', 'd-flex', 'flex-column', 'gap-2', 'w-100']);
  const cardTitle = createElement('h2', ['card-title', 'fw-bold', 'text-truncate'], null, title);
  const cardText = createElement('p', ['card-text', 'overflow-hidden'], null, description);
  cardText.style.cssText =
    '-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;';
  cardBody.append(cardTitle, cardText);
  const cardFooter = createCardFooter(deadline, id);
  element.append(cardBody, cardFooter);
  return element;
};
const createCardFooter = (deadline, id) => {
  const element = createElement(
    'div',
    ['d-flex', 'flex-column', 'flex-sm-row', 'align-items-end', 'justify-content-between', 'w-100'],
    null,
    null,
    null,
    null,
    null
  );
  const span2 = createElement('span', null, null, `DeadLine:  ` + parseDate(deadline));
  const a = createElement(
    'a',
    ['bg-theme-primary', 'text-theme-black', 'px-3', 'text-decoration-none'],
    null,
    'View',
    '/pages/listings/listing/index.html?id=' + id ,
  );
  element.append(span2, a);
  return element;
};
