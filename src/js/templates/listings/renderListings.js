// Author: Emilie Herrera Thomsen

import { getListOfListings } from "../../api/posts/getListOfListings.js";
import { searchListings } from "../../listeners/post/searchListing.js";

export async function renderListings() {
    const listingsContainer = document.querySelector(".listingContainer");

    const data = await getListOfListings();
    const listings = data.products;
    console.log(listings)
            
    listingsContainer.innerHTML = "";
    listings.forEach(listing => {
        listingsContainer.innerHTML += 
       `<div class="card my-3 mx-auto" style="max-width: 500px">
              <div class="row row-cols-2">
                <div class="col pe-0">
                  <img src=${listing.images[0]} class="card-img-top h-100 img-fluid" alt="..." />
                </div>
                <div class="col ps-0">
                  <div class="card-body">
                    <p>${listing.title}</p>
                    <div class="d-flex mb-3">
                      <p class="mt-5"><span class="text-dark">()Application</span></p>
                      <div class="px-4 mt-5">EndsAt</div>
                    </div>
                  </div>
                  <div class="position-absolute bottom-0 end-0 mx-3 my-3">
                    <div>
                      <a href="#" class="btn bg-theme-primary">View More</a>
                    </div>
                  </div>
                </div>
              </div>`                   
    });
}


