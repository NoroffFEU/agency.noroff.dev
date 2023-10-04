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
       <div class="card col-sm-6">
         <div class="row my-3 px-3 bg-theme-light shadow">
           <div class="col-md-4 mt-5 px-2">
             <img src="../../images/logoipsum-287.svg" class="img-fluid rounded-start" alt="..." />
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title fw-bold">Lorem ipsum dolor sit amet.</h5>
               <p 
                 class="card-text overflow-hidden" 
                 style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;"
               >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ducimus vitae ipsam tempore! Reiciendis soluta doloremque tempore harum, fugiat laudantium optio eveniet quae deleniti iste.</p>
             </div>
             <div class="d-flex align-items-end mx-3 my-3" style="font-size: .75rem">
               <span>(4) Applications</span>
               <span>dd.mm.yy</span>
               <a href="#" class="btn bg-theme-primary py-1">View</a>
             </div>
           </div>
         </div>
       </div>
       `                   
    });
}


