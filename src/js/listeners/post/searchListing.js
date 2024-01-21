import { getListOfListings } from '../../api/posts/getListOfListings.js';
import { renderListings, renderNoListings } from '../../templates/listings/renderListings.js';

/**
 * function thats allow a user to search thru the listings, the function calls getListOfListings() to get all the listings, it then gets the search value and uses
 * the .filter() method to create a new array with listings that matches the search value
 */
export async function searchListings() {
  const listings = await getListOfListings();
  const searchElement = document.querySelector('#searchListing');

  setupSearchHandler((query) => {
    const filteredListings = filterSearchListings(listings, query);

    if (filteredListings.length > 0) {
      renderListings(filteredListings);
    } else {
      renderNoListings();
    }
  }, searchElement);
}

export function filterSearchListings(listings, query) {
  return listings.filter((listing) => doesListingMatchQuery(listing, query));
}

export function doesListingMatchQuery(listing, query) {
  return query.length < 2 || listing.title.toLowerCase().includes(query.toLowerCase());
}

export function setupSearchHandler(onSearch, searchElement) {
  searchElement.onkeyup = (event) => {
    onSearch(event.target.value);
  };
}

export async function filterListings() {
  const arrayOfListings = await getListOfListings();

  function filter(daysInMilliseconds) {
    const filteredListings = arrayOfListings.filter((listing) => {
      const dateCreated = new Date(listing.created);
      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - dateCreated.getTime();
      if (timeDifference <= daysInMilliseconds) {
        return true;
      }
    });
    if (filteredListings.length > 0) {
      renderListings(filteredListings);
    } else {
      renderNoListings();
    }
  }

  const btnAll = document.querySelector('#allListings');
  const btnLatest = document.querySelector('#latestListings');
  const btnFourteen = document.querySelector('#fourteenDaysListings');
  const btnThirty = document.querySelector('#thirtyDaysListings');

  const day = 24 * 60 * 60 * 1000;
  const fourDays = 4 * day;
  const fourteenDays = 14 * day;
  const thirtyDays = 30 * day;

  btnAll.addEventListener('click', () => {
    renderListings(arrayOfListings);
  });

  btnLatest.addEventListener('click', () => {
    filter(fourDays);
  });

  btnFourteen.addEventListener('click', () => {
    filter(fourteenDays);
  });

  btnThirty.addEventListener('click', () => {
    filter(thirtyDays);
  });
}
