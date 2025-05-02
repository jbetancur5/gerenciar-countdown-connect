
import { useState } from 'react';
import { Company } from '../types';

interface SectorFilterProps {
  onFilterChange: (sector: string | null) => void;
}

const SectorFilter: React.FC<SectorFilterProps> = ({ onFilterChange }) => {
  const [activeSector, setActiveSector] = useState<string | null>(null);

  const handleFilterClick = (sector: string | null) => {
    setActiveSector(sector);
    onFilterChange(sector);
  };

  const sectors = [
    { id: 'emergente', label: 'Sectores Emergentes' },
    { id: 'triple-impacto', label: 'Triple Impacto' },
    { id: 'ia-digitalizacion', label: 'IA & Digitalización' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      <button
        onClick={() => handleFilterClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeSector === null
            ? 'bg-gerenciar-darkblue text-white'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        Todos
      </button>
      {sectors.map(sector => (
        <button
          key={sector.id}
          onClick={() => handleFilterClick(sector.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeSector === sector.id
              ? 'bg-gerenciar-darkblue text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {sector.label}
        </button>
      ))}
    </div>
  );
};

export default SectorFilter;
