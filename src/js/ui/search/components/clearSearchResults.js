// Author: Stian Kornbakk
// Team: FE-User

/* 
  Used to clear html instead of using innerHTML
*/

export function clearSearchResults() {
  while (this.hasChildNodes()) {
    this.removeChild(this.lastChild);
  }
}
