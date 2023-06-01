// Author: Margrethe By
// Team: Enigma Bullet


// Function that sends the Delete request to the API.
import { deleteItem } from "../../api/posts/deleteListing.js";

// API url (dummy API for post data)
import { dummyApiUrl } from "../../api/constants.js";



/**
 * Adds an eventListener to the delete/trash can button. Function deletes listing.
 * @param { string } id to determine which listing is going to be deleted.
 */
export function setDeleteListingListener(id) {
    // Adding path and ID to the url sent to the API
    const deleteUrl = `${dummyApiUrl}posts/${id}`;

    document.addEventListener("click", (event) => {
        const btnPath = event.path[1].classList[2];
        console.log(btnPath)
        if(btnPath === (`btn${id}`)) {
            if(confirm(`Are you sure you want to delete this listing?`) === true) {
                deleteItem(deleteUrl);
            }
        }
    }); 
}