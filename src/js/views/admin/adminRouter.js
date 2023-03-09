import { getUsersList } from '../../api/users/getAllUsers.js';
import { deleteUser } from './deleteUsers.js';
import { showListings } from './showListings.js';
import { showUsers } from './showUsers.js';

export function adminRouter() {
  deleteUser();
  showListings();
  showUsers();
  getUsersList();
}
