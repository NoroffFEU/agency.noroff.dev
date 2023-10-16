// Author: Emilie Herrera Thomsen

import { getListOfListings } from "../../api/posts/getListOfListings.js";
import { searchListings } from "../../listeners/post/searchListing.js";

export async function renderListings() {
    const listingsContainer = document.querySelector(".listingContainer");

    const data = await getListOfListings();
    const listings = data.products;
    console.log(listings)
            
    listingsContainer.innerHTML = "";
    listings.forEach((listing, number) => {
        listingsContainer.innerHTML += 
       `
       <div class="col-12 col-lg-6">
         <div class="row p-2 px-3 g-3 bg-theme-light m-0 shadow">
           <div class="m-0 p-3 col-3 d-flex flex-column justify-content-center">
             <img src="../../images/logoipsum-287.svg" class="img-fluid rounded-start" alt="..." />
           </div>
           <div class="m-0 col-9 d-flex flex-column gap-2 align-items-baseline">
             <div class="card-body d-flex flex-column gap-2 w-100">
               <h5 class="card-title fw-bold text-truncate">Lorem ipsum dolor sit amet.</h5>
               <p 
                 class="card-text overflow-hidden" 
                 style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;"
               >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus vitae ipsam tempore! Reiciendis soluta doloremque tempore harum, fugiat laudantium optio eveniet quae deleniti iste.</p>
             </div>
             <div class="d-flex flex-column flex-sm-row align-items-end justify-content-between w-100" style="font-size: .75rem">
               <span class="text-nowrap">(4) Applications</span>
               <span>dd.mm.yy</span>
               <a href="#" class="bg-theme-primary text-theme-light px-3 text-decoration-none" style="font-size: 1rem">View</a>
             </div>
           </div>
         </div>
       </div>
       `                   
    });
}


