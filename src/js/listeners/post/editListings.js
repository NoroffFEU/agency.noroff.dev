// Author: Gonzalo Longe

import { editSingleListing } from '../../api/posts/editSingleListing.js';

export function editListingListener() {
  const form = document.querySelector('#editListing');
  form.addEventListener('submit', editListingListenerForm);
}

async function editListingListenerForm() {
  event.preventDefault();

  const url = new URL(location.href);
  const id = url.searchParams.get('id');

  const form = event.target;
  const formData = new FormData(form);
  const listing = Object.fromEntries(formData.entries());

  //send it to API
  editSingleListing(id, listing);
}

// const form = document.querySelector('#editListing');
// form.addEventListener('submit', editListingListener);

// export async function editListingListener() {
//   event.preventDefault();

//   const url = new URL(location.href);
//   const id = url.searchParams.get('id');

//   const form = event.target;
//   const formData = new FormData(form);
//   const listing = Object.fromEntries(formData.entries());

//   //send it to API
//   editSingleListing(id, listing);
// }

// import { editSingleListing } from '../../api/posts/editSingleListing.js';

// console.log('Hello12322222');
// export async function editListingListener() {
//   event.preventDefault();
//   const form = document.querySelector('#editListing');

//   const url = new URL(location.href);
//   const id = url.searchParams.get('id');

//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const listing = Object.fromEntries(formData.entries());
//     listing.id = id;

//     //send it to API
//     editSingleListing(listing);
//     // location.reload();
//   });
// }
