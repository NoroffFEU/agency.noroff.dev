// Author: Emilie Herrera Thomsen
// This is just the skeleton for a search functionality, not finished.

// Author of the working version: Ekaterina Nattrass


import { getListOfListings } from '../../api/posts/getListOfListings.js';
import { renderListings, renderNoListings } from '../../templates/listings/renderListings.js';

/**
 * funnction thats allow a user to search thru the lisitngs, the function calls getListOfLisitings() to get all the listings, it then gets the search value and uses
 * the .filter() method to create a new array with listings that matches the search value
 */
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

export async function filterListings() {

    const arrayOfListings = await getListOfListings();

    function filter(daysInMilliseconds) {
      const filteredListings = arrayOfListings.filter((listing) => {
      const dateCreated = new Date(listing.created);
      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - dateCreated.getTime();
      if (timeDifference <= daysInMilliseconds) {
        return true
      }
     });
     if (filteredListings.length > 0) {
      renderListings(filteredListings)
     } else {
      renderNoListings()
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
      filter(fourDays)
    });

    btnFourteen.addEventListener('click', () => {
     filter(fourteenDays)
    });

    btnThirty.addEventListener('click', () => {
    filter(thirtyDays)
    });
} 
