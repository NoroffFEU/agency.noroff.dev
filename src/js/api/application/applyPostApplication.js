// author: Enirose Hellum
// Create an API call for postApplication.js where a user can apply to a listing.
// This need an id and querySelector
import { headers } from '../headers.js';
import { dummyApiUrl, dummyApiGetPostById } from '../constants.js'

const method = 'post';

const querySelector = document.location.search;
const params = new URLSearchParams(querySelector);
let id = params.get('id');

/**
 * An API function to be able to apply to a listing
 * It requires an id
 * @returns 
 */

export async function applyPostApplication () {
    const applyUrl = `${dummyApiUrl}${dummyApiGetPostById}${id}`;
    
    const response = await fetch(applyUrl, {
        options: {
            method,
            headers: headers(),
            body,
        },
         body: JSON.stringify(),
    });

    const postData = await response.json();
    if (response.ok) {
        window.location.reload();
        return postData;
    } else {
        alert ('Something went wrong! Please try again!')
    }
}