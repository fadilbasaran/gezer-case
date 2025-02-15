import { create } from 'zustand';

interface CharacterStore {
  filters: {
    status: string;
    species: string;
    gender: string;
  };
  setFilters: (filters: { status?: string; species?: string; gender?: string }) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  filters: {
    status: '',
    species: '',
    gender: '',
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
}));