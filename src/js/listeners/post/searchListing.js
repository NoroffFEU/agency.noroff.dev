// Author: Emilie Herrera Thomsen
// This is just the skeleton for a search functionality, not finished.

import { getListOfListings } from '../../api/posts/getListOfListings.js';
import { renderListings, renderNoListings } from '../../templates/listings/renderListings.js';

export async function searchListings() {

  const arrayOfListings = await getListOfListings();

  const search = document.querySelector('#searchListing');
  search.onkeyup = function (event) {

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredListings = arrayOfListings.filter(function (result) {
      if (searchValue.length < 2 || result.title.toLowerCase().includes(searchValue)) {
        return true;
      } 
    });

    if (filteredListings.length > 0){
      renderListings(filteredListings);
    }
    else {
      renderNoListings();
    }
 
  };
}
