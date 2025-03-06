export function favoriteListing() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-auth="favoriteListing"]');
    if (!button) return;

    const img = button.querySelector('img');
    if (!img) return;

    const listingId = new URLSearchParams(window.location.search).get('id');
    if (!listingId) {
      console.warn('Ingen ID funnet i URL-en.');
      return;
    }

    const STORAGE_KEY = 'favorites';
    const FAVORITED_ICON = '/assets/icons/heart-solid.svg';
    const UNFAVORITED_ICON = '/assets/icons/heart-fav.svg';

    let favorites = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const index = favorites.indexOf(listingId);

    if (index !== -1) {
      favorites.splice(index, 1);
      img.src = UNFAVORITED_ICON;
    } else {
      favorites.push(listingId);
      img.src = FAVORITED_ICON;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  });
}
