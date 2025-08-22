import { apiPath } from '../constants.js';
import { headers } from '../headers.js';

export async function getFavorite(listingId) {
  const userUrl = apiPath + `users/` + JSON.parse(localStorage.getItem('id'));
  let userFavorites = [];

  try {
    const reqOption = {
      method: 'GET',
      headers: headers(),
    };
    const response = await fetch(userUrl, reqOption);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch favorite status');
    }

    userFavorites = data.listings;
    const favoriteIds = userFavorites.map((favorite) => favorite.id);

    if (favoriteIds.includes(listingId)) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error fetching favorite status:', error);
    throw error;
  }
}
