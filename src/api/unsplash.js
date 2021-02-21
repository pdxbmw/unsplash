export const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export const UNSPLASH_BASE_URL = 'https://api.unsplash.com/';
export const UNSPLASH_SEARCH_URL = UNSPLASH_BASE_URL + 'search/photos';

/**
 * Simple cache object to eliminate redundant API calls.
 *
 * @todo Use a more robust cache mechanism.
 */
const cache = {};

/**
 * Authorization headers to send with each request.
 */
const headers = { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` };

/**
 * Perform async search for images; cache results.
 *
 * @param {string} query Query string search term.
 * @return {object} The search results.
 */
export const searchImagesByName = async query => {
  const url = UNSPLASH_SEARCH_URL + '?' + new URLSearchParams({ query });

  // Only request if not stored in cache.
  if (!cache[url]) {
    const response = await fetch(url, { headers });
    const data = await response.json();

    cache[url] = data?.results;
  }

  return cache[url];
};
