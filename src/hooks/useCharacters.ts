// hooks/useCharacters.ts
import { useQuery } from '@tanstack/react-query';
import { useCharacterStore } from '../store/useCharacterStore';

const fetchCharacters = async (filters: { status?: string; species?: string; gender?: string }) => {
  const params = new URLSearchParams();
  if (filters.status) params.set('status', filters.status);
  if (filters.species) params.set('species', filters.species);
  if (filters.gender) params.set('gender', filters.gender);

  const response = await fetch(`https://rickandmortyapi.com/api/character?${params.toString()}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useCharacters = () => {
  const filters = useCharacterStore((state) => state.filters);

  return useQuery({
    queryKey: ['characters', filters], // queryKey bir dizi (array) olmalı
    queryFn: () => fetchCharacters(filters), // queryFn bir fonksiyon olmalı
  });
};