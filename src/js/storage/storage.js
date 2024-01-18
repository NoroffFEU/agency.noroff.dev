/**
 * @class Store
 * @classdesc A class for storing data in the browser.
 * @param {string} key - The key to store the data under.
 * @param {object} state - The data to store.
 * @param {boolean} [persist=false] - Whether or not to persist the data. Changes the storage from session to local.
 */
export class Store {
  constructor(key, state, persist = false) {
    if (!key) {
      throw new Error('Key is required');
    }

    this.storage = persist ? localStorage : sessionStorage;
    this.key = key;
    this.state = state;
  }

  get state() {
    try {
      return JSON.parse(this.storage.getItem(this.key));
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  
  set state(newState) {
    if (newState !== undefined) {
      this.storage.setItem(this.key, JSON.stringify(newState));
    }
  }

  clear() {
    if (localStorage.getItem(this.key)) {
      localStorage.removeItem(this.key);
    }
    if (sessionStorage.getItem(this.key)) {
      sessionStorage.removeItem(this.key);
    }
  }
 
}
