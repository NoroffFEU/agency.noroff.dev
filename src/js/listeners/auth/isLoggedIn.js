import * as storage from "../../storage/storage.js" ;

export function isUserLoggedIn() {
    const token = storage.state ? storage.state.token : null;
    return !!token; 
}

const viewListingsButton = document.getElementById('viewListingsButton');

viewListingsButton.addEventListener('click', function() {
    if (isUserLoggedIn()) {
        window.location.href = '/pages/listings/index.html'; 
    } else {
        window.location.href = '/pages/auth/login/index.html'; 
    }
});
