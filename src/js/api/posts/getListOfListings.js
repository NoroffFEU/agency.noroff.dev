// Author: Emilie Herrera Thomsen
// The Dummy json needs to be replaced with actual endpoint.

import { apiPath } from '../constants.js';
import { headers } from '../headers.js';
import { message } from '../../utilities/message/message.js';

export async function getListOfListings() {
  const response = await fetch(apiPath, {
    headers: headers(),
    body: JSON.stringify(),
  });
  if (response.ok) {
    return await response.json();
  } else {
    message(
      'danger',
      'An error occured when attempting to get job listings',
      '#listingsErrorContainer'
    );
    console.error(`Error: ${response.status} ${response.statusText}`);
  }
}
