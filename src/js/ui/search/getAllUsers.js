import { renderUsersTemplate } from '/src/js/templates/admin/users/index.js';
import { searchUsers } from './searchUsers.js';

const userArray_DUMMY = [
    {
        id: 1001,
        fullName:     "Test Testingson",
        email:        "test@gmail.com",
        isActive:    true
    },
    {
        id: 1002,
        fullName:     "Geir Hansen",
        email:        "Ghansen@online.no",
        isActive:    false
    },
    {
        id: 1003,
        fullName:     "Preben Hallingdal",
        email:        "Preben@Hallingdal.com",
        isActive:    true
    },
    {
        id: 1004,
        fullName:     "Larian Threel",
        email:        "threel-gift@ghotmail.no",
        isActive:    true
    },
    {
        id: 1005,
        fullName:     "Burn Jessice Kinder Pesto Presbertoison Hallingdal den fjerde i kongerekkefølgen, flere ord for å ha en veldig tydelig problem mulighet",
        email:        "Burn@gmail.com",
        isActive:    true
    },
    {
        id: 1006,
        fullName:     "Berit Ærevedt",
        email:        "ære@gmail.com",
        isActive:    true
    },
    {
        id: 1007,
        fullName:     "Sverre Jessheim",
        email:        "SvJessheim@gmail.com",
        isActive:    false
    },
    {
        id: 1008,
        fullName:     "Grev Farquad",
        email:        "høy@gmail.com",
        isActive:    true
    },
    {
        id: 1009,
        fullName:     "peter liason",
        email:        "peter-l1223@gmail.com",
        isActive:    false
    },
    {
        id: 1010,
        fullName:     "Peter Kristian",
        email:        "HarryHoleFan123@gmail.com",
        isActive:    true
    },
  ];

const usersContainer = document.querySelector('#usersContainer');

export async function getUsersList() {
    const users = userArray_DUMMY;
    searchUsers(users, usersContainer);
    if (users.length) {
        renderUsersTemplate(users, usersContainer);
    } else {
        console.log('nothing to show');
    }
}

getUsersList();