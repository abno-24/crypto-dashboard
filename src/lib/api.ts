import { CryptoData } from "@/types";

interface ApiResponse {
  data: CryptoData[];
  error?: string;
}

/**
 * Fetches cryptocurrency volume and transaction data from the API.
 *
 * This function makes a request to the specified API endpoint to retrieve
 * data on cryptocurrency volume and transactions for the specified coins.
 * The default coins are 'btc' and 'eth', but this can be customized by
 * passing a different comma-separated string of coin symbols.
 *
 * If the request is successful, it returns an object with a `data` property
 * containing an array of `CryptoData` objects. If the request fails or an
 * error occurs, it returns an object with a `data` property as an empty array
 * and an `error` property containing the error message.
 *
 * @param {string} coins - A comma-separated string of coin symbols to fetch data for.
 * @returns {Promise<ApiResponse>} A promise that resolves to an ApiResponse containing
 * the cryptocurrency data or an error message.
 */
export async function fetchCryptoData(coins: string = 'btc,eth'): Promise<ApiResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/crypto/volume-and-transactions?coin=${coins}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: CryptoData[] = await response.json();
    return { data };
  } catch (error) {
    if (error instanceof Error) {
      return { data: [], error: error.message };
    }
    return { data: [], error: 'Unknown error' };
  }
}