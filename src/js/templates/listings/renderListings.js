// Emilie Herrera Thomsen

// This is just a skeleton for rendering a listing, it is in no way finished.


export function renderListings(ListingsToRender) {
    const listingsContainer = document.querySelector(".testingListings");
    listingsContainer.innerHTML = "";

   ListingsToRender.forEach(function(resultDummyApi) {
        listingsContainer.innerHTML += `<div>
                                    <h4>${resultDummyApi}</h4>
                                    </div>`
    });
};