import { getListOfListings } from '../../api/posts/getListOfListings.js';

export function sortPostfromZToA(listings) {
    return listings.sort(
        (postA, postB) => {
            const titleA = postA.title.toLowerCase();
            const titleB = postB.title.toLowerCase();

            if (titleA < titleB) {
                return 1; 
            } else if (titleA > titleB) {
                return -1; 
            } else {
                return 0; 
            }
        }
    );
}

export function sortPostfromAToZ(listings) {
    return listings.sort(
        (postA, postB) => {
            const titleA = postA.title.toLowerCase();
            const titleB = postB.title.toLowerCase();

            if (titleA > titleB) {
                return 1; 
            } else if (titleA < titleB) {
                return -1; 
            } else {
                return 0; 
            }
        }
    );
}

export function sortPostfromCheapest(listings) {
    return listings.sort(
        (postA, postB) => {
            return postA.price - postB.price
})
}
export function sortPostfromExpensive(listings) {
    return listings.sort(
        (postA, postB) => {
         return postB.price - postA.price
})}

export async function renderSortedPostsTemplateNewtoOld() {
  
    const listingsContainer = document.querySelector('.listingContainer');
    const data = await getListOfListings();
    const listings = data.products;
    
    const sortUpcoming = document.querySelector("#descending");
    sortUpcoming.addEventListener("click", function (event) {
      event.preventDefault();
      const sortedPost = sortPostfromZToA(listings);
      listingsContainer.innerHTML = "";
    sortedPost.forEach(function(jobListing) {
        listingsContainer.innerHTML += 
       `
       <div class="col-12 col-lg-6">
         <div class="row p-2 px-3 g-3 bg-theme-light m-0 shadow">
           <div class="m-0 p-3 col-3 d-flex flex-column justify-content-center">
             <img src="${jobListing.thumbnail}" />
           </div>
           <div class="m-0 col-9 d-flex flex-column gap-2 align-items-baseline">
             <div class="card-body d-flex flex-column gap-2 w-100">
               <h5 class="card-title fw-bold text-truncate">${jobListing.title}</h5>
               <p 
                 class="card-text overflow-hidden" 
                 style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;"
               >${jobListing.description}</div>
             <div class="d-flex flex-column flex-sm-row align-items-end justify-content-between w-100" style="font-size: .75rem">
               <span class="text-nowrap">${jobListing.category}</span>
               <span>${jobListing.brand}</span>
               <a href="#" class="bg-theme-primary text-theme-black px-3 text-decoration-none" style="font-size: 1rem">View</a>
             </div>
           </div>
         </div>
       </div>
       `;
  });
  
  })}

  export async function renderSortedPostsTemplateOldtoNew() {
  
    const listingsContainer = document.querySelector('.listingContainer');
    const data = await getListOfListings();
    const listings = data.products;
    
    const sortUpcoming = document.querySelector("#ascending");
    sortUpcoming.addEventListener("click", function (event) {
      event.preventDefault();
      const sortedPost = sortPostfromAToZ(listings);
      listingsContainer.innerHTML = "";
    sortedPost.forEach(function(jobListing) {
        listingsContainer.innerHTML += 
       `
       <div class="col-12 col-lg-6">
         <div class="row p-2 px-3 g-3 bg-theme-light m-0 shadow">
           <div class="m-0 p-3 col-3 d-flex flex-column justify-content-center">
             <img src="${jobListing.thumbnail}" />
           </div>
           <div class="m-0 col-9 d-flex flex-column gap-2 align-items-baseline">
             <div class="card-body d-flex flex-column gap-2 w-100">
               <h5 class="card-title fw-bold text-truncate">${jobListing.title}</h5>
               <p 
                 class="card-text overflow-hidden" 
                 style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;"
               >${jobListing.description}</div>
             <div class="d-flex flex-column flex-sm-row align-items-end justify-content-between w-100" style="font-size: .75rem">
               <span class="text-nowrap">${jobListing.category}</span>
               <span>${jobListing.brand}</span>
               <a href="#" class="bg-theme-primary text-theme-black px-3 text-decoration-none" style="font-size: 1rem">View</a>
             </div>
           </div>
         </div>
       </div>
       `;
  });
  
  })}

  export async function renderSortedPostsTemplateCheapest() {
  
    const listingsContainer = document.querySelector('.listingContainer');
    const data = await getListOfListings();
    const listings = data.products;
    
    const sortUpcoming = document.querySelector("#cheapest");
    sortUpcoming.addEventListener("click", function (event) {
      event.preventDefault();
      const sortedPost = sortPostfromCheapest(listings);
      listingsContainer.innerHTML = "";
    sortedPost.forEach(function(jobListing) {
        
        listingsContainer.innerHTML += 
       `
       <div class="col-12 col-lg-6">
         <div class="row p-2 px-3 g-3 bg-theme-light m-0 shadow">
           <div class="m-0 p-3 col-3 d-flex flex-column justify-content-center">
             <img src="${jobListing.thumbnail}" />
           </div>
           <div class="m-0 col-9 d-flex flex-column gap-2 align-items-baseline">
             <div class="card-body d-flex flex-column gap-2 w-100">
               <h5 class="card-title fw-bold text-truncate">${jobListing.title}</h5>
               <p 
                 class="card-text overflow-hidden" 
                 style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;"
               >${jobListing.description}</div>
             <div class="d-flex flex-column flex-sm-row align-items-end justify-content-between w-100" style="font-size: .75rem">
               <span class="text-nowrap">${jobListing.category}</span>
               <span>${jobListing.brand}</span>
               <a href="#" class="bg-theme-primary text-theme-black px-3 text-decoration-none" style="font-size: 1rem">View</a>
             </div>
           </div>
         </div>
       </div>
       `;
  });
  
  })}

  export async function renderSortedPostsTemplateExpensive() {
  
    const listingsContainer = document.querySelector('.listingContainer');
    const data = await getListOfListings();
    const listings = data.products;
    
    const sortUpcoming = document.querySelector("#expensive");
    sortUpcoming.addEventListener("click", function (event) {
      event.preventDefault();
      const sortedPost = sortPostfromExpensive(listings);
      listingsContainer.innerHTML = "";
    sortedPost.forEach(function(jobListing) {
      
        listingsContainer.innerHTML += 
       `
       <div class="col-12 col-lg-6">
         <div class="row p-2 px-3 g-3 bg-theme-light m-0 shadow">
           <div class="m-0 p-3 col-3 d-flex flex-column justify-content-center">
             <img src="${jobListing.thumbnail}" />
           </div>
           <div class="m-0 col-9 d-flex flex-column gap-2 align-items-baseline">
             <div class="card-body d-flex flex-column gap-2 w-100">
               <h5 class="card-title fw-bold text-truncate">${jobListing.title}</h5>
               <p 
                 class="card-text overflow-hidden" 
                 style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical;"
               >${jobListing.description}</div>
             <div class="d-flex flex-column flex-sm-row align-items-end justify-content-between w-100" style="font-size: .75rem">
               <span class="text-nowrap">${jobListing.category}</span>
               <span>${jobListing.brand}</span>
               <a href="#" class="bg-theme-primary text-theme-black px-3 text-decoration-none" style="font-size: 1rem">View</a>
             </div>
           </div>
         </div>
       </div>
       `;
  });
  
  })}
  
  
  