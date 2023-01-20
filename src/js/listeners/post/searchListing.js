// Author: Emilie Herrera Thomsen
// This is just the skeleton for a search functionality, not finished.

import { getListOfListings } from "../../api/posts/getListOfListings.js";
import {renderListings} from "../../templates/listings/renderListings.js";

export function searchListings(arrayOfListings) {
    const search = document.querySelector(".searchInput");

    search.onkeyup = function() {
        const searchValue = event.target.value.trim().toLowerCase();
    
        const filteredListings = arrayOfListings.filter(function(result){
            if(result.toLocaleLowerCase().startsWith(searchValue)) {
                return true;
            };
        });    
                
        renderListings(filteredListings);
    };
};

// const searchButton = document.querySelector(".searchButton")
// searchButton.onclick = function() {
//     const searchInput = document.querySelector(".searchInput").value;
//     const newUrl = getListingsUrl + `/search?q=${searchInput}`;
    
//     getListOfListings(newUrl);
// }
