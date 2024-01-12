// Author: Emilie Herrera Thomsen

import { getListOfListings } from '../../api/posts/getListOfListings.js';

export async function renderListings() {
  const listingsContainer = document.querySelector('.listingContainer');

  const data = await getListOfListings();

  listingsContainer.innerHTML = '';

  data.forEach(function (data) {
    const date2 = new Date(data.deadline);
    listingsContainer.innerHTML += `
       <div class="col-12 col-lg-6">
         <div class="row g-3 bg-theme-light m-0 shadow card card-listing rounded-0 bg-white">
           <div class="m-0 col-3 d-flex flex-column justify-content-center img-fluid img-thumbnail card-img-top border-0 py-4 px-5" id="img-thumbnail">
             <img src=${data.company.logo} class="rounded-start " alt="..." />
           </div>
           <div class="m-0 col-12 border-top d-flex flex-column gap-2 align-items-baseline py-1 px-4" id="listing-card-body">
             <div class="card-body d-flex flex-column gap-2 w-100 pt-1 p-0">
               <h5 class="card-title fw-bold text-truncate mb-0">${data.title}</h5>
               <p 
                 class="card-text overflow-hidden" 
                 style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;"
               >${data.description}</p>
             </div>
             <div class="d-flex flex-column flex-sm-row align-items-end justify-content-between w-100 pb-1" style="font-size: .75rem">
               <span class="text-nowrap">Deadline</span>
               <span>${date2}</span>
               <a href="#" class="bg-theme-primary text-white px-3 text-decoration-none" style="font-size: 1rem">View</a>
             </div>
           </div>
         </div>
       </div>
     </div>
     `;
  });
}
