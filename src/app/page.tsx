import { fetchCryptoData } from '@/lib/api';
import FilterWrapper from '@/components/FilterWrapper';

export default async function Home() {
  const { data, error } = await fetchCryptoData();

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error}</div>;
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Crypto Dashboard</h1>
      <FilterWrapper initialData={data} />
    </main>
  );
}