// Author: Emilie Herrera Thomsen

//Updated by : Fredrik Tokle
// Rewrote the function to use createElements, instead of forcing a string into the DOM.
//The function now also uses the API to get the data, instead of using a Lorem Ipsum, but still uses the same structure as before.
//The function also uses the createElements function to create the elements, instead of creating them manually.
//The Api call still comes from a dummy API, but the function is ready to be used with the actual API.
//Deleted the searchListings import as it was never used

import { getListOfListings } from '../../api/posts/getListOfListings.js';
import { createElement } from '../CreateHtml.js';

export const renderListings = async () => {
  const listingsContainer = document.querySelector('.listingContainer');
  listingsContainer.innerHTML = '';
  const { products } = await getListOfListings();
  console.log(products);
  products.forEach((listing) => {
    const listingCards = createListings(listing);
    listingsContainer.append(listingCards);
  });
};

const createListings = ({ title, description, thumbnail }) => {
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
  const imgContainer = createImgContainer(thumbnail, title);
  const cardBody = createCardBody(title, description);
  elementRow.append(imgContainer, cardBody);
  element.append(elementRow);

  return element;
};

const createImgContainer = (thumbnail, title) => {
  const element = createElement('div', [
    'm-0',
    'p-3',
    'col-3',
    'd-flex',
    'flex-column',
    'justify-content-center',
  ]);
  const img = createElement(
    'img',
    ['img-fluid', 'rounded-start'],
    null,
    null,
    null,
    thumbnail,
    title
  );
  element.append(img);
  return element;
};
const createCardBody = (title, description) => {
  const element = createElement('div', [
    'm-0',
    'col-9',
    'd-flex',
    'flex-column',
    'gap-2',
    'align-items-baseline',
  ]);
  const cardBody = createElement('div', ['card-body', 'd-flex', 'flex-column', 'gap-2', 'w-100']);
  const cardTitle = createElement('h5', ['card-title', 'fw-bold', 'text-truncate'], null, title);
  const cardText = createElement('p', ['card-text', 'overflow-hidden'], null, description);
  cardText.style.cssText =
    '-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;';
  cardBody.append(cardTitle, cardText);
  const cardFooter = createCardFooter();
  element.append(cardBody, cardFooter);
  return element;
};
const createCardFooter = () => {
  const element = createElement(
    'div',
    ['d-flex', 'flex-column', 'flex-sm-row', 'align-items-end', 'justify-content-between', 'w-100'],
    null,
    null,
    null,
    null,
    null
  );
  const span1 = createElement('span', ['text-nowrap'], null, '(4) Applications');
  const span2 = createElement('span', null, null, 'dd.mm.yy');
  const a = createElement(
    'a',
    ['bg-theme-primary', 'text-theme-black', 'px-3', 'text-decoration-none'],
    null,
    'View',
    '../../../listings/listing/index.html'
  );
  element.append(span1, span2, a);
  return element;
};
