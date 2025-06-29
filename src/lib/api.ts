import { CryptoData } from "@/types";

interface ApiResponse {
  data: CryptoData[];
  error?: string;
}

export async function fetchCryptoData(coins: string = 'btc,eth'): Promise<ApiResponse> {
  try {
    const response = await fetch(`http://localhost:5000/api/crypto/volume-and-transactions?coin=${coins}`, {
      headers: {
        'Content-Type': 'application/json',
      },
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