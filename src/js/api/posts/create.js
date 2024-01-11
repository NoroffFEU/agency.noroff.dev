import { apiBaseFetch } from '../apiBaseFetch.js';
import { apiUrl, applicationUrl } from '../constants.js';

/**
 * Sends a POST request to create a new Application.
 * @param {Object} appData - The input data for the new application
 * @returns The response data from the API.
 * @throws {Error} Throws an error if the API request fails.
 */

export async function create(appData) {
  const createAppURL = apiUrl.toString() + applicationUrl;

  try {
    const response = await apiBaseFetch(createAppURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appData),
    });

    if (!response.ok) {
      throw new Error(`Error creating application: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Create application failed:', error);
    throw error;
  }
}
