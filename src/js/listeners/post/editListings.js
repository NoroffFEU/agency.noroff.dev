// Author: Gonzalo Longe
import { apiBaseFetch } from '../../api/apiBaseFetch.js';
import { apiUrl, listingsUrl } from '../../api/constants.js';
import { editSingleListing } from '../../api/posts/editSingleListing.js';

const url = new URL(location.href);
const id = url.searchParams.get('id');
const listingUrl = apiUrl.toString() + listingsUrl + id;

async function getListingData(listingUrl) {
  const listingData = await apiBaseFetch(listingUrl);

  document.getElementById('editTitle').value = `${listingData.title}`;
  document.getElementById('editTags').value = `${listingData.tags}`;
  document.getElementById('editDeadline').value = `${listingData.deadline}`;
  document.getElementById('editRequirements').value = `${listingData.requirements}`;
  document.getElementById('editDescription').value = `${listingData.description}`;
}
getListingData(listingUrl);

export function editListingListener() {
  const form = document.querySelector('#editListing');
  form.addEventListener('submit', editListingListenerForm);
}

async function editListingListenerForm() {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const listing = Object.fromEntries(formData.entries());

  console.log(listing);
  //send it to API
  editSingleListing(id, listing);
}
