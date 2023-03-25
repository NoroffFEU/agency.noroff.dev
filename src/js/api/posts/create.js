
import { dummyApiUrl } from "../constants.js";
import { dummyApiCreatePost } from "../constants.js";
import { authBaseFetchOpen } from "../apiBaseFetch.js";

/**
 * Creates a new listing
 * @param {string} listData - Represents input information
 */
export async function create(listData) {
  const createListingUrl = dummyApiUrl + dummyApiCreatePost;

  console.log(createListingUrl)

  const data = await authBaseFetchOpen(createListingUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(listData),
  }
  );

  if (data.ok) {
    return await data.json();
  } else {
    throw new Error("Something went wrong, please try again");
  }
}
