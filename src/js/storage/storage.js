/**
 * Class to store items in localstorage.
 * This code I got from Oliver
 * Joakim Tveter changed the third parameter nameing for clarity
 */
export class Store {
  constructor(key, state, session = false) {
    this.storage = session ? sessionStorage : localStorage;

    if (!key) {
      throw new Error('Key is required');
    }

    this.key = key;
    this.state = state;
  }

  get state() {
    return JSON.parse(this.storage.getItem(this.key));
  }

  set state(state) {
    if (state) {
      this.storage.setItem(this.key, JSON.stringify(state));
    }
  }

  clear() {
    this.storage.removeItem(this.key);
  }
}
