// import { create } from '../../api/posts/create.js';

/**
 * A listener for when users are creating a new listing
 */
// export async function createListing() {
//   const form = document.querySelector('#createNewListing');
//   const createTitle = document.querySelector('#createTitle');
//   const createLocation = document.querySelector('#createLocation');
//   const createDeadline = document.querySelector('#createDeadline');
//   const createPicture = document.querySelector('#pictureUrl');
//   const createDescription = document.querySelector('#createDescription');
//   const modalBody = document.querySelector('.modal-body');

//   if (form) {
//     form.addEventListener('submit', async (event) => {
//       event.preventDefault();

//       const title = createTitle.value;
//       const location = createLocation.value;
//       const deadline = createDeadline.value;
//       const picture = createPicture.value;
//       const desc = createDescription.value;
//       const currentTime = new Date().toISOString();

//       if (createDeadline > currentTime) {
//         await create({
//           // param to test dummyAPI
//           userId: 5,

//           // waiting on correct params from api
//           title: title,
//           location: location,
//           deadline: deadline,
//           img: picture,
//           description: desc,
//         });

//         // pop up success message
//         // redirect?
//
//       } else {
//         alert('Something went wrong');
//       }
//     });
//   }
// }

export function createListing() {
  const modalBody = document.querySelector('.modal-body');
  const button = document.querySelector('#createListingBtn');

  const createTitle = document.querySelector('#createTitle');
  const createLocation = document.querySelector('#createLocation');
  const createDeadline = document.querySelector('#createDeadline');
  const createPicture = document.querySelector('#pictureUrl');
  const createDescription = document.querySelector('#createDescription');

  button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);

    const title = createTitle.value;
    const location = createLocation.value;
    const deadline = createDeadline.value;
    const picture = createPicture.value;
    const desc = createDescription.value;
    const currentTime = new Date().toISOString();

    const results = {
      title: title,
      location: location,
      deadline: deadline,
      img: picture,
      description: desc,
    };

    let modalText = '';

    console.log(results);

    if (results.title.length >= 3 && results.location.length >= 3 && deadline > currentTime) {
      console.log(title.length, location.length);
      modalText = `<img src="/src/assets/icons/checkmark.svg" alt="" />
      <h3>Success</h3>`;
      return (modalBody.innerHTML = `${modalText}`);
    } else {
      modalText = `<img src="/src/assets/icons/cancel.svg" alt="" />
      <h3>Woops! Please try again.</h3>`;
      return (modalBody.innerHTML = `${modalText}`);
    }
  });
}
