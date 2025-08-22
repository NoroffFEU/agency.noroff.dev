import { headers } from '../../api/headers.js';
import { apiPath } from '../../api/constants.js';
import { authBaseFetchOpen } from '../../api/apiBaseFetch.js';
import { getFavorite } from '../../api/posts/getFavorite.js';
import { message } from '../message/message.js';

/**
 * Toggles the favorite status of a listing.
 * @returns {Promise<void>}
 * @throws {Error} If the toggle operation fails.
 * @example
 * // Usage example
 * toggleFavorite().catch((error) => {
 *   console.error('Error toggling favorite:', error);
 * });
 */
export function toggleFavorite() {
  document.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-auth="favoriteListing"]');
    if (!button) return;

    const img = button.querySelector('img');
    if (!img) return;

    const listingId = new URLSearchParams(window.location.search).get('id');
    if (!listingId) {
      console.warn('Ingen ID funnet i URL-en.');
      message('warning', 'Could not find listing ID', '#messageContainer');
      return;
    }

    const baseUrl = apiPath + 'users/favorites';
    const body = JSON.stringify({ listingId: listingId });
    const favoritedIcon = '/assets/icons/heart-solid.svg';
    const unfavoritedIcon = '/assets/icons/heart-fav.svg';
    const requestHeaders = {
      ...headers(),
      'Content-Type': 'application/json',
    };

    try {
      // Toggle favorite using POST request
      const response = await authBaseFetchOpen(baseUrl, {
        method: 'POST',
        headers: requestHeaders,
        body: body,
      });

      if (!response.ok) {
        message(
          'danger',
          'Failed to update favorite status. Please try again.',
          '#messageContainer'
        );
        throw new Error('Failed to toggle favorite');
      } else {
        // Check the new favorite status from API after toggle
        const isFavorited = await getFavorite(listingId);
        img.src = isFavorited ? favoritedIcon : unfavoritedIcon;
      }
    } catch (error) {
      message(
        'danger',
        'An unexpected error occurred. Please try again later.',
        '#messageContainer'
      );
      console.error('Error toggling favorite:', error);
    }
  });
}
