// Author: Cristina Syversen
// Replace dummy JSON endpoint with actual endpoint

import { authBaseFetchOpen } from '../apiBaseFetch.js';

export async function getCompanyListings(companyName) {
  const getListingsUrl = 'https://dummyjson.com/products';
  const response = await authBaseFetchOpen(getListingsUrl);

  if (response.ok) {
    const json = await response.json();

    if (json && json.products) {
      return json.products.filter((product) => {
        product.brand === companyName;
      });
    }
  } else {
    alert('Unable to get company listings. Please try again.');
  }
}
