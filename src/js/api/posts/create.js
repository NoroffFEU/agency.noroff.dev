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
