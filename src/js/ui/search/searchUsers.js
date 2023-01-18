import { renderUsersTemplate } from "../../templates/admin/users/index.js";

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

        renderUsersTemplate(filteredUsers, usersContainer)
    })
};

