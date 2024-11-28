export function listingsHomeButtonEventListner(homeButtonId, targetUrl) {
    document.addEventListener('DOMContentLoaded', () => {
        const homeButton = document.getElementById(homeButtonId);
        if(homeButton) {
            homeButton.addEventListener('click', function() {
                window.location.href = targetUrl
            })
        }
    })
}