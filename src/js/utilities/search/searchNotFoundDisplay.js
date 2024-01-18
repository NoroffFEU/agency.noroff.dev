/**
 * @param {HTMLElement} container - This parameter is a reference to the HTML element that will contain the error message. It is used to insert the error message into the DOM.
 * This function displays an error message if the user or listing is not found in the database.
 * So far, this function is only used in the search functionality.
 * This is just a template for how an error could look like, not the final product.
 * @returns {HTMLElement} - Returns the HTML element that contains the error message.
 */

export function userNotFound(container) {
    //
    return (container.innerHTML = `
    <div class="container vh-100">
        <div class="row text-center my-3">
            <div>
                <img class="img-fluid" src="" alt="Illustration of close icon">
            </div>
            <h3 class="">Something went wrong</h3>
            <p>The listing/user you are looking for was not found in our database, please try again.</p>
        </div>
    </div>`);
}

export function listingNotFound(container) {
    //
    return (container.innerHTML = `
    <div class="container vh-100">
        <div class="row text-center my-3">
            <div>
                <img class="img-fluid" src="" alt="Illustration of close icon">
            </div>
            <h3 class="">Something went wrong</h3>
            <p>The listing/user you are looking for was not found in our database, please try again.</p>
        </div>
    </div>`);
}
