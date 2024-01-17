export function adjustH2FontSize() {
    document.addEventListener('DOMContentLoaded', function () {
        // Get the H2 element
        var h2Element = document.querySelector('h2');

        // Check if the URL includes "listings/index.html"
        if (window.location.href.includes("listings/index.html")) {
            // Add a class to adjust the font size
            h2Element.classList.add('font-size-1-1rem');
        }
    });
}
