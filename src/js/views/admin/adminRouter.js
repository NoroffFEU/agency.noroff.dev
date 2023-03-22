// import { getUsersList } from '../../api/users/getAllUsers.js';
import { showListings } from './showListings.js';
import { showUsers } from './showUsers.js';

export function adminRouter() {
  showListings();
  showUsers();
  //   getUsersList();
}
