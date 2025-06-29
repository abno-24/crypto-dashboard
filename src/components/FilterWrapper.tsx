'use client';

import { useState } from 'react';
import { CryptoData } from '@/types';
import Chart from '@/components/Chart';
import Filter from '@/components/Filter';
import { FaSpinner } from 'react-icons/fa';

interface FilterWrapperProps {
  initialData: CryptoData[];
}

const FilterWrapper: React.FC<FilterWrapperProps> = ({ initialData }) => {
  const [coinFilter, setCoinFilter] = useState<'BTC' | 'ETH' | 'both'>('both');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Filter
        onFilterChange={(filter) => {
          setIsLoading(true);
          setCoinFilter(filter);
          setTimeout(() => setIsLoading(false), 0);
        }}
      />
      {isLoading ? (
        <div className="text-center p-4">
          <FaSpinner className="animate-spin text-blue-500 text-2xl" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Chart data={initialData} coinFilter={coinFilter} type="volume" />
          <Chart data={initialData} coinFilter={coinFilter} type="transactions" />
        </div>
      )}
    </>
  );
};

export default FilterWrapper;