// Co-author: Oskar Jenssen
import { create } from "../../api/posts/create.js";

/**
 * A listener for when users are creating a new listing
 */
export async function createListing() {
  const form = document.querySelector("#createNewListing");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

    const data = event.target;
    const formData = new FormData(data);
    const listing = Object.fromEntries(formData.entries());
    listing.userId = 5; // Example id required for the dummy API

    const currentTime = new Date().toISOString();



      if (listing.deadline > currentTime) {
        await create(listing);
        // pop up success message
        // redirect?
      } else {
        alert("Something went wrong");
      }
    });
  }
}
