import { dummyApiUrl } from "../constants.js";
import { dummyApiCreatePost } from "../constants.js";
import { authBaseFetchOpen } from "../apiBaseFetch.js";

/**
 * Creates a new listing
 * @param {string} listData - Represents input information
 */
export async function create(listData) {
  const createListingUrl = dummyApiUrl + dummyApiCreatePost;
  const method = "post";

  console.log(createListingUrl)

  const data = await authBaseFetchOpen(createListingUrl, {
    method,
    body: JSON.stringify(listData),
  }
  );

  const response = await data.json();
  console.log(response);

  // if (data.ok) {
  //   // return await response.json();
  // } else {
  //   console.log(data);
  //   // alert("Something went wrong, please try again");
  // }
}

