import { renderSearchMessage } from './renderSearchMessage.js';
import { renderUsersTemplate } from '/src/js/ui/search/users/renderUsers.js';

/*
    Filtering search results based on users live input 
*/

export function setupSearch (users, usersContainer) {
    function onSearch(event) {
        event.preventDefault();
        const searchTerm = event.target.value;
        const term = searchTerm.toLowerCase();
        const filteredUsers = users.filter(function (user) {
          const userName = user.fullName.toLowerCase();
          const email = user.email.toLowerCase();
          return userName.includes(term) || email.includes(term);
        });
        console.log(filteredUsers);
      
        if (filteredUsers.length > 0) {
          renderUsersTemplate(filteredUsers, usersContainer);
        } else {
          renderSearchMessage('There are no users matching your search..');
        }
      }

    usersSearchForm.addEventListener('input', onSearch);
}