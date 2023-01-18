import { create } from "../api/listings/create.js";

/**
 * A listener for when users are creating a new listing
 */
export async function createListing() {
  const form = document.querySelector("#createNewListing");
  const createTitle = document.querySelector("#createTitle");
  const createLocation = document.querySelector("#createLocation");
  const createDeadline = document.querySelector("#createDeadline");
  const createPicture = document.querySelector("#pictureUrl");
  const createDescription = document.querySelector("#createDescription");

  await create({
    title: "Hello",
    userId: 5,


  });

  // if (form) {
  //   form.addEventListener("submit", async (event) => {
  //     event.preventDefault();

  //     const title = createTitle.value;
  //     const location = createLocation.value;
  //     const deadline = createDeadline.value;
  //     const picture = createPicture.value;
  //     const desc = createDescription.value;
  //     const currentTime = new Date().toISOString();



  //     if (createDeadline > currentTime) {
  //       await create({
  //         // waiting on correct params from api

  //         // title: title,
  //         // location: location,
  //         // deadline: deadline,
  //         // img: picture,
  //         // description: desc,

  //       });
  //       // form.reset();
  //       // pop up success message
  //       // redirect?
  //     } else {
  //       alert("The date must be in the future");
  //     }
  //   });
  // }
}
