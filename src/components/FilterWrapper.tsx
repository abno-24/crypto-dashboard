'use client';

import { useState } from 'react';
import { CryptoData } from '@/types';
import Chart from '@/components/Chart';
import Filter from '@/components/Filter';
import { FaSpinner } from 'react-icons/fa';

interface FilterWrapperProps {
  initialData: CryptoData[];
}

/**
 * FilterWrapper component renders a filter and two charts below it.
 *
 * The filter is rendered with the `onFilterChange` prop set to a function that
 * sets the `coinFilter` state to the selected filter and sets the `isLoading`
 * state to true. When the state is updated, the component is re-rendered with
 * the new filter and the charts are updated accordingly.
 *
 * While the filter is being changed, the component renders a spinner in the
 * center of the screen. When the filter change is complete, the spinner is
 * removed and the charts are rendered with the new filter.
 *
 * The charts are rendered with the `data` prop set to the `initialData` prop
 * passed to the component, and the `coinFilter` prop set to the current value
 * of the `coinFilter` state. The `type` prop is set to `'volume'` and
 * `'transactions'` for the two charts.
 *
 * @param {CryptoData[]} initialData The initial data to be rendered in the charts.
 * @returns {JSX.Element} The JSX element representing the filter and charts.
 */
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