// pages/index.tsx
import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { useCharacterStore } from '../store/useCharacterStore';
import { DataTable } from './table/characterTable/data-table';
import { columns } from './table/characterTable/columns';


const HomePage: React.FC = () => {
  const { data, error, isLoading } = useCharacters();
  const setFilters = useCharacterStore((state) => state.setFilters);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Character List</h1>
      <div >
      <label>
        Status:
        <select onChange={(e) => setFilters({ status: e.target.value })}>
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
        </select>
      </label>
      <label>
        Gender:
        <select onChange={(e) => setFilters({ gender: e.target.value })}>
        <option value="">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        </select>
      </label>
      </div>
      
      <DataTable columns={columns} data={data?.results || []} />
    </div>
  );
};

export default HomePage;