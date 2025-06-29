'use client';

import { useState } from "react";

interface FilterProps {
  onFilterChange: (filter: 'BTC' | 'ETH' | 'both') => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<'BTC' | 'ETH' | 'both'>('both');

  const handleFilterChange = (filter: 'BTC' | 'ETH' | 'both') => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex justify-center space-x-4 p-4">
      <button
        onClick={() => handleFilterChange('BTC')}
        className={`px-4 py-2 rounded ${selectedFilter === 'BTC' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        BTC
      </button>
      <button
        onClick={() => handleFilterChange('ETH')}
        className={`px-4 py-2 rounded ${selectedFilter === 'ETH' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        ETH
      </button>
      <button
        onClick={() => handleFilterChange('both')}
        className={`px-4 py-2 rounded ${selectedFilter === 'both' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        Both
      </button>
    </div>
  )
}

export default Filter;