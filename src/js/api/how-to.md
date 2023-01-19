To make a call to the API, you do not need to set up a fetch, that is created.
You call the api to use the response in your work like this

```js
import { apiBaseFetch } from "./api.js"; 
import * as apiLink from "./constant.js";

// this route is just a dummy link. Its not where the function is located

// displayListings.js

async function loadListingsFromAPI() {
  const headers = {
      "Content-Type": "application/json"
  };
  const data = await apiBaseFetch(apiLink.baseApiUrl + apiLink.endpoint,
    headers
  );

  if (!data.ok) {
    console.log(data);
  } else {
    console.log("Error");
  }
}

loadListingsFromAPI();
```