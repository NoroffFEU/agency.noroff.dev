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

    btnAll.addEventListener('click', () => {
    renderListings(arrayOfListings);
    } );

    btnLatest.addEventListener('click', () => {
      filter(4 * 24 * 60 * 60 * 1000)
    });

    btnFourteen.addEventListener('click', () => {
     filter(14 * 24 * 60 * 60 * 1000)
    });

  btnThirty.addEventListener('click', () => {
    filter(30 * 24 * 60 * 60 * 1000)
  });
} 
