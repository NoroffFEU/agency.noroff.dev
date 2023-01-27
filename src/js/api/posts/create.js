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

// DOESNT WORK, WILL FIX ONCE API IS HERE :)

import { apiBaseFetch } from '../apiBaseFetch.js';
import { dummyApiCreatePost, dummyApiUrl } from '../constants.js';

/**
 * Sends a POST request to create a new Application.
 * @param {string} appData - The input data for the new post
 * @returns 
 */

export async function create(appData) {
  const createAppURL = dummyApiUrl + dummyApiCreatePost;

  const data = await apiBaseFetch(createAppURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appData),
  });

  if (data.ok) {
    console.log(data)
    return await data.json();
  } else {
    console.error('An error occured.');
  }
}
