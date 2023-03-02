import { Store } from '../../storage/storage.js';

/** To remove the token from local storage using the provided Store class,
 we would first need to create an instance of the class, passing in the required key and state parameters.
 For example, I am assuming the token is stored under the key 'token':
*/
/**
 * Removes token and profile from local storage
 */

export const logout = function () {
  new Store('token').clear();
  new Store('profile').clear();
  new Store('role').clear();

  window.location.replace('/');
};
