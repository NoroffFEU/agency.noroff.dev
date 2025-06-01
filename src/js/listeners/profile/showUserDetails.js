import { getUser } from '../../api/users/getUser.js';

// Import API url for fetch the data (userDetailsTemplate)
import { createProfileContent } from '../../templates/profile/createProfileContent.js';

export async function showUserDetails() {
  const id = localStorage.getItem('id').replaceAll('"', "")
  if (id == null) {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  }
  const profile = await getUser(id);
  createProfileContent(profile);
  /**
   * THIS IS NOT IDEAL, but as a temporary fix.
   * The {object}.company.id should be stored during login of the user, instead of storing it here
   * If this gets fixed, it needs to be addressed a little different inside src/js/users/editCompany.js
   * You can see this is retrieved there in localStorage. This is for editing the Client profile
   * */
  if (profile.company) {
    localStorage.setItem('companyId', profile.company.id);
  }

  if (profile.role === 'Client') {
    localStorage.setItem('companyName', profile.company.name);
  }
}
