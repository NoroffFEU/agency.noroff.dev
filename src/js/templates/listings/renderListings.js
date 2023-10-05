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
       `
       <div class="col-sm-6">
         <div class="row my-3 px-3 py-2 bg-theme-light shadow">
           <div class="col-md-4 mt-5 px-2">
             <img src="../../images/logoipsum-287.svg" class="img-fluid rounded-start" alt="..." />
           </div>
           <div class="col-md-8">
             <div class="card-body d-flex flex-column gap-2">
               <h5 class="card-title fw-bold">Lorem ipsum dolor sit amet.</h5>
               <p 
                 class="card-text overflow-hidden" 
                 style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;"
               >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus vitae ipsam tempore! Reiciendis soluta doloremque tempore harum, fugiat laudantium optio eveniet quae deleniti iste.</p>
             </div>
             <div class="d-flex align-items-end justify-content-between gap-1 mx-3 my-3 w-100" style="font-size: .75rem">
               <span class="text-nowrap">(4) Applications</span>
               <span>dd.mm.yy</span>
               <a href="#" class="bg-theme-primary text-theme-light py-1 px-3 text-decoration-none" style="font-size: 1rem">View</a>
             </div>
           </div>
         </div>
       </div>
       `                   
    });
}


