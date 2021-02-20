import create from 'zustand';
import { searchImagesByName } from 'services/api';

export const useStore = create(set => ({
  images: [],
  error: false,
  loading: false,
  fetch: async term => {
    set({ loading: true });

    try {
      const images = await searchImagesByName(term);

      set({ images, error: false, loading: false });
    } catch {
      set({ error: true, loading: false });
    }
  }
}));

export default useStore;
