import {  apiPath, listingsUrl } from '../constants.js';
import { headers } from '../headers.js';
/**
 * Sends a POST request to create a new Application.
 * @param {Object} appData - The input data for the new application
 * @returns The response data from the API.
 * @throws {Error} Throws an error if the API request fails.
 */

export async function create(appData) {
  const createAppURL = apiPath + listingsUrl;
  
  try {
    const response = await fetch(createAppURL, {
      
      method: 'POST',
      headers: headers('application/json'),
      body: JSON.stringify(appData),
    });
    console.log(appData)
    console.log(response)
    if (!response.ok) {
      throw new Error(`Error creating application: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Create application failed:', error);
    throw error;
  }
}

