import { renderSearchMessage } from './renderSearchMessage.js';
import { renderUsersTemplate } from '/src/js/ui/search/users/renderUsers.js';

/*
    Filtering search results based on users input 
*/

export function searchUsers(users, usersContainer) {
    usersSearchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const form = event.target;
        const searchTerm = form.term.value;
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

    })
};

