// Author: Ilya Martchenko
// The api is not available yet, so this is just a dummy search function that should work with proper api.

// import * as search from "../index.js";
import { getListOfListings } from '../../api/posts/getListOfListings.js';
import { renderListings } from '../../templates/listings/renderListings.js';
import { getSearchTermsListings } from './getSearchTerms.js';
import { listingNotFound } from './searchNotFoundDisplay.js';

/**
 * Adds an event listener to the search input field and filters the listings based on the user's input.
 * @param {string} searchInput - The input element for the search bar.
 * @param {string} container - The container element for the listings.
 * @param {function} getListOfListings - The function to get a list of listings from the API.
 * @param {function} renderListings - The function to render the listings on the page.
 * @param {function} getSearchTermsListings - The search for listings based on a search term.
 */

export function searchFunction() {
  const searchInput = document.querySelector('input#searchListing');
  const container = document.querySelector('.listingContainer');
  //
  searchInput.addEventListener('input', (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    const term = searchTerm.toLowerCase();
    //
    if (!term.length || term.length < 3) {
      container.innerHTML = '';
      return renderListings(getListOfListings, container);
    }
    //
    if (getSearchTermsListings(getListOfListings, term).length) {
      container.innerHTML = '';
      return renderListings(getSearchTermsListings(getListOfListings, term), container);
    } else {
      container.innerHTML = '';
      return listingNotFound(container);
    }
  });
}
