import { getFavorite } from '../../api/posts/getFavorite.js';
import { message } from '../../utilities/message/message.js';

/**
 * Sets the initial favorite state of a listing based on its ID from the URL.
 * @returns {Promise<void>}
 * @example
 * // Usage example
 * setInitialFavoriteState().catch((error) => {
 *   console.error('Error setting initial favorite state:', error);
 * });
 */
export async function setInitialFavoriteState() {
  const listingId = new URLSearchParams(window.location.search).get('id');
  if (!listingId) {
    console.warn('Ingen ID funnet i URL-en.');
    return;
  }

  try {
    const isFavorited = await getFavorite(listingId);
    const button = document.querySelector('[data-auth="favoriteListing"]');
    if (!button) {
      console.warn('Favorite button not found in DOM');
      return;
    }

    const img = button.querySelector('img');
    if (!img) {
      console.warn('Heart icon not found in favorite button');
      return;
    }

    const favoritedIcon = '/assets/icons/heart-solid.svg';
    const unfavoritedIcon = '/assets/icons/heart-fav.svg';

    img.src = isFavorited ? favoritedIcon : unfavoritedIcon;
  } catch (error) {
    console.error('Error setting initial favorite state:', error);
    message(
      'danger',
      'An unexpected error occurred loading favorites. Please try again later.',
      '#messageContainer'
    );

    // Fallback: set to unfavorited state if error occurs
    const button = document.querySelector('[data-auth="favoriteListing"]');
    if (button) {
      const img = button.querySelector('img');
      if (img) {
        img.src = '/assets/icons/heart-fav.svg';
      }
    }
  }
}
