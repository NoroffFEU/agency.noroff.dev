// Author: Gonzalo Longe
import { apiBaseFetch } from '../../api/apiBaseFetch.js';
import { apiUrl, listingsUrl } from '../../api/constants.js';
import { editSingleListing } from '../../api/posts/editSingleListing.js';

const url = new URL(location.href);
const id = url.searchParams.get('id');
const listingUrl = apiUrl.toString() + listingsUrl + id;

async function getListingData(listingUrl) {
  const listingData = await apiBaseFetch(listingUrl);

  const deadline = new Date(listingData.deadline);
  const newDeadline = deadline.toISOString().split('T')[0];

  document.getElementById('editTitle').value = `${listingData.title}`;
  document.getElementById('editTags').value = `${listingData.tags}`;
  document.getElementById('editDeadline').value = `${newDeadline}`;
  document.getElementById('editRequirements').value = `${listingData.requirements}`;
  document.getElementById('editDescription').value = `${listingData.description}`;
}

export function editListingListener() {
  getListingData(listingUrl);
  const form = document.querySelector('#editListing');
  const viewListingBtn = document.querySelector('#editListingViewListingBtn');

  form.addEventListener('submit', editListingListenerForm);
  viewListingBtn.addEventListener('click', () => {
    window.location.reload();
  });
}

async function editListingListenerForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const listing = Object.fromEntries(formData.entries());

  //send it to API
  editSingleListing(id, listing);
}
