import { fetchCryptoData } from '@/lib/api';
import FilterWrapper from '@/components/FilterWrapper';
import Attribution from '@/components/Attribution';

/**
 * The main entry point of the application, which displays the crypto dashboard
 * with charts and a filter.
 *
 * It fetches the initial data from the API and passes it to the FilterWrapper
 * component, which handles the filtering and chart rendering.
 *
 * If there's an error, it displays the error message in red.
 *
 * @returns {JSX.Element} The JSX element representing the main page of the app.
 */
export default async function Home() {
  const { data, error } = await fetchCryptoData();

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error}</div>;
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Crypto Dashboard</h1>
      <FilterWrapper initialData={data} />
      <Attribution />
    </main>
  );
}