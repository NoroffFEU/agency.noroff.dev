// Author: Margrethe By
// Team: Enigma Bullet

import { deleteItem } from "../../api/posts/deleteListing.js";

// Import API url (dummy API for post data)
import { dummyApiUrl } from "../../api/constants.js";

export function setDeleteListingListener(id) {
    const deleteButton = document.querySelector(`.btn${id}`);

    // Adding path and ID to the url sent to the API
    const deleteUrl = `${dummyApiUrl}posts/${id}`;

    console.log(deleteUrl)
    deleteButton.onclick = function () {
        console.log("it works");
        if(confirm("Are you sure you want to delete this listing?") === true) {
            deleteItem(deleteUrl);
        }
        
    }
}