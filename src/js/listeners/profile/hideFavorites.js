
// The function toggles the visibility of the favorite listings section
// When the localstorage key - role is Client the section gets hidden
// else its displayed
// Because the key value is stored with quotes the variable role gets trimmed down
// Its seems unnecessary to store the localstorage values with quotes and should be fixed

export function toggleFavSectionDisplay() {
    const favListingsSection = document.getElementById('favoriteListings');
    if (!favListingsSection) {
        return;
    }

    let role = localStorage.getItem("role");
    console.log(`Raw Role from localStorage: "${role}"`);

    // Removes any surrounding quotes 
    role = role.replace(/^"|"$/g, '').trim(); // Remove quotes and trims spaces
    

    // When client then hide favorite listing section
    if (role?.toLowerCase() === "client") {
      
        favListingsSection.style.display = "none";
    } else {
        
    }
}
