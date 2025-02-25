
/**
 * Toggles the visibility of the favorite listings section based on the user's role.
 * Hides the section if the user's role is "client".
 *
 * @function toggleShowFavListings
 * @returns {void} This function does not return a value.
 */

export function toggleShowFavListings() {
    const favListingsSection = document.getElementById('favoriteListings');
    if (!favListingsSection) {
        return;
    }

    const role = localStorage.getItem("role")?.replace(/^"|"$/g, '').trim().toLowerCase();

    // When client then hide favorite listing section
    if (role === "client") {
        favListingsSection.style.display = "none";
    }
}
