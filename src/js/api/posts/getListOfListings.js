// Author: Emilie Herrera Thomsen
// The Dummy json needs to be replaced with actual endpoint.


import { authBaseFetchOpen} from "../apiBaseFetch.js";
import { apiPath } from "../constants.js";
import { headers } from "../headers.js";





export async function getListOfListings() {
    const getListingsUrl = apiPath;

  const data = await fetch(getListingsUrl, {
      headers: headers(),
      body: JSON.stringify(),
    }
    );
     if (response.ok) {
   return await data.json();
  } else {
    console.error(`Error: ${response.status} ${response.statusText}`);
  }
    
  }
