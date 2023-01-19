// Author: Emilie Herrera Thomsen

import { authBaseFetchOpen } from "../apiBaseFetch.js";
import { renderListings } from "../../templates/listings/renderListings.js";
import { searchListings } from "../../listeners/post/searchListing.js";


export async function getListOfListings(listData) {
    const getListingsUrl = "https://dummyjson.com/products";
  
    const data = await authBaseFetchOpen(getListingsUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(listData),
    }
    );
  
    if (data.ok) {
      
      const listings = await data.json();
      console.log(listings);

      renderListings(Object.entries(listings));
      searchListings(Object.entries(listings))


    } else {
      console.log(data);
      alert("Something went wrong, please try again");
    }
  }
  
  getListOfListings()

  