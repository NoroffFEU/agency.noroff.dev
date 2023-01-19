import { userTemplate } from '/src/js/templates/admin/users/userTemplate.js';
import { clearSearchResults } from '/src/js/ui/search/components/clearSearchResults.js';

HTMLElement.prototype.clear = clearSearchResults;

/**
 * Template for rendering all users onto page.
 */

export function renderUsersTemplate(userDataList, parent) {
  usersContainer.clear();
  parent.append(...userDataList.map(userTemplate));
}
