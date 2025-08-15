import { getUser } from '../../api/users/getUser.js';

// Import API url for fetch the data (userDetailsTemplate)
import { createProfileContent } from '../../templates/profile/createProfileContent.js';

/**
 * This function fetches user details from the API and displays them on the profile page.
 * It retrieves the user ID from localStorage, constructs the API URL, and makes a GET request.
 * @returns {Promise<Object|null>} Returns a Promise that resolves with the user data or null if an error occurs.
 * @throws {Error} If the fetch request fails or the response is not ok.
 */
export async function showUserDetails() {

  try {
    const id = localStorage.getItem('id').replaceAll('"', "");
    if (id == null) {
      localStorage.removeItem("user");
      window.location.href = "login.html";
    }
    const profile = await getUser(id);
    createProfileContent(profile);

    if (profile.company) {
      localStorage.setItem('companyId', profile.company.id);
    }

    if (profile.role === 'Client') {
      localStorage.setItem('companyName', profile.company.name);
    }
    return profile;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return null;

  }
}
