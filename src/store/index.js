import create from 'zustand';

export const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export const UNSPLASH_BASE_URL = 'https://api.unsplash.com/';
export const UNSPLASH_SEARCH_URL = UNSPLASH_BASE_URL + 'search/photos';

// Options to send with each request.
const requestOptions = {
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
  }
};

// Simple cache object to eliminate redundant API calls.
// TODO: Use a more robust cache mechanism.
const cache = {};

/**
 * Format search URL.
 *
 * @param {string} query Query string search term.
 * @return {string} The fully-qualified formatted URL.
 */
const searchURL = query =>
  UNSPLASH_SEARCH_URL + '?' + new URLSearchParams({ query });

export const useStore = create(set => ({
  images: [],
  error: false,
  loading: false,
  fetch: async term => {
    set({ loading: true });

    try {
      const url = searchURL(term);

      // Only request if not stored in cache.
      if (!cache[url]) {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        cache[url] = data?.results;
      }

      set({ images: cache[url], error: false, loading: false });
    } catch {
      set({ error: true, loading: false });
    }
  }
}));

export default useStore;
