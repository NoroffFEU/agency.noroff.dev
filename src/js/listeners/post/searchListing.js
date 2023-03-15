// Author: Emilie Herrera Thomsen
// Co-author: Oskar Jenssen

import { getListOfListings } from "../../api/posts/getListOfListings.js";
import { renderListings } from "../../templates/listings/renderListings.js";

export async function searchListings(arrayOfListings) {
    const listings = await getListOfListings();
    const search = document.querySelector("#searchListing");
    const listingsContainer = document.querySelector(".listingContainer");

    search.onkeyup = function(event) {
        const searchValue = event.target.value.trim().toLowerCase();

        //Filters the listings based on searchvalue
        const listingsFiltered = listings.products.filter((listing) => {
            if(listing.title.toLowerCase().match(searchValue)){
                return true; 
            } else {
                return false;
            }
        });

        // Empties the listings container and adds the listings matching the searchvalue
        listingsContainer.innerHTML = "";
        listingsFiltered.forEach(listing => {
            listingsContainer.innerHTML += 
           `
           <div class="col-sm-6">
             <div class="card my-3 px-3 bg-theme-light shadow">
               <div class="col-md-4 mt-5 px-2">
                 <img src="../../images/logoipsum-287.svg" class="img-fluid rounded-start" alt="..." />
               </div>
               <div class="col-md-8">
                 <div class="card-body">
                   <h5 class="card-title">${listing.title}</h5>
                   <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus vitae ipsam tempore! Reiciendis soluta doloremque tempore harum, fugiat laudantium optio eveniet quae deleniti iste.</p>
                 </div>
                 <div class="position-absolute bottom-0 end-0 mx-3 my-3">
                   <div>
                     <a href="#" class="btn bg-theme-primary">View More</a>
                   </div>
               </div>
               </div>
             </div>
           </div>
           `                   
        });
        console.log(listingsFiltered);
        return listingsFiltered;
    };
};

// const searchButton = document.querySelector(".searchButton")
// searchButton.onclick = function() {
//     const searchInput = document.querySelector(".searchInput").value;
//     const newUrl = getListingsUrl + `/search?q=${searchInput}`;
    
//     getListOfListings(newUrl);
// }
