//import { getUsersList } from '../../api/users/getAllUsers.js';
//import { deleteUser } from './deleteUsers.js';//-------- Commented out for now, function is not ready to be used. ----------//
import { showListings } from './showListings.js';
import { showUsers } from './showUsers.js';
import { showApplicants } from './showApplicants.js';

export function adminRouter() {
  //deleteUser();//-------- Commented out for now, function is not ready to be used. ----------//
  showListings();
  showUsers();
  showApplicants();
  //getUsersList();
}
