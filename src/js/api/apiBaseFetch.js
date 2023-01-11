/**
* @async
* @function fetch
* @param {string} url - The URL of the API endpoint.
* @param {object} [headers=null] - An object containing custom headers to be sent with the request.
* @param {number} [offset=0] - The offset to be used for pagination.
* @param {number} [limit=100] - The number of items to be returned per page.
* @returns {Promise<any>} A promise that resolves to the JSON data returned by the API.
*/

export async function apiBaseFetch(url, headers = null, offset = 0, limit = 100) {
    let options = {};
    if (headers) {
      options.headers = headers;
    }
    options.method = 'GET';
    let query = `offset=${offset}&limit=${limit}`;
    let full_url = new URL(url);
    full_url.search = new URLSearchParams(query);
    try {
      const response = await fetch(full_url, options);
      return await response.json();
    } catch (error) {
      console.error(`Error: ${error}`);
      throw error;
    }
  }