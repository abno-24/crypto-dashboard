import { CryptoData } from "@/types";

interface ApiResponse {
  data: CryptoData[];
  error?: string;
}

export async function fetchCryptoData(coins: string = 'btc,eth'): Promise<ApiResponse> {
  // try {
  //   const response = await fetch(`http://localhost:5000/api/crypto/volume-and-transactions?coin=${coins}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   const data: CryptoData[] = await response.json();
  //   return { data };
  // } catch (error) {
  //   if (error instanceof Error) {
  //     return { data: [], error: error.message };
  //   }
  //   return { data: [], error: 'Unknown error' };
  // }

  const mockData: CryptoData[] = [
    {
        "id": 1,
        "coin": "BTC",
        "volume_usd": "19701781601.744408",
        "transaction_count": "2153",
        "timestamp": "2025-06-28T09:30:00.416Z"
    },
    {
        "id": 3,
        "coin": "BTC",
        "volume_usd": "19595919668.60245",
        "transaction_count": "2514",
        "timestamp": "2025-06-28T09:38:00.439Z"
    },
    {
        "id": 2,
        "coin": "ETH",
        "volume_usd": "10070295197.997566",
        "transaction_count": "5472",
        "timestamp": "2025-06-28T09:30:01.317Z"
    },
    {
        "id": 4,
        "coin": "ETH",
        "volume_usd": "9858999460.37957",
        "transaction_count": "5961",
        "timestamp": "2025-06-28T09:38:01.349Z"
    },
    {
        "id": 5,
        "coin": "BTC",
        "volume_usd": "18827809997.354706",
        "transaction_count": "7730",
        "timestamp": "2025-06-28T10:30:00.974Z"
    },
    {
        "id": 6,
        "coin": "ETH",
        "volume_usd": "9698278726.14108",
        "transaction_count": "7078",
        "timestamp": "2025-06-28T10:30:01.846Z"
    },
    {
        "id": 7,
        "coin": "BTC",
        "volume_usd": "18457310861.10809",
        "transaction_count": "4841",
        "timestamp": "2025-06-28T11:30:01.128Z"
    },
    {
        "id": 8,
        "coin": "ETH",
        "volume_usd": "9066947915.43156",
        "transaction_count": "6902",
        "timestamp": "2025-06-28T11:30:01.479Z"
    },
    {
        "id": 9,
        "coin": "BTC",
        "volume_usd": "15285127168.9075",
        "transaction_count": "335434",
        "timestamp": "2025-06-28T14:30:01.910Z"
    },
    {
        "id": 10,
        "coin": "BTC",
        "volume_usd": "13771174957.596775",
        "transaction_count": "335434",
        "timestamp": "2025-06-28T15:30:01.941Z"
    },
    {
        "id": 11,
        "coin": "ETH",
        "volume_usd": "7793915165.100692",
        "transaction_count": "1599",
        "timestamp": "2025-06-28T15:30:02.831Z"
    },
    {
        "id": 12,
        "coin": "BTC",
        "volume_usd": "8770749635.853483",
        "transaction_count": "388943",
        "timestamp": "2025-06-29T02:30:01.859Z"
    },
    {
        "id": 13,
        "coin": "ETH",
        "volume_usd": "5856754014.656545",
        "transaction_count": "5660",
        "timestamp": "2025-06-29T02:30:02.788Z"
    },
    {
        "id": 14,
        "coin": "BTC",
        "volume_usd": "8727673704.059214",
        "transaction_count": "388943",
        "timestamp": "2025-06-29T03:30:01.775Z"
    },
    {
        "id": 15,
        "coin": "ETH",
        "volume_usd": "5755610997.940731",
        "transaction_count": "2196",
        "timestamp": "2025-06-29T03:30:02.673Z"
    },
    {
        "id": 16,
        "coin": "BTC",
        "volume_usd": "8552633587.922411",
        "transaction_count": "388943",
        "timestamp": "2025-06-29T04:30:01.850Z"
    },
    {
        "id": 17,
        "coin": "ETH",
        "volume_usd": "5843931175.701839",
        "transaction_count": "4812",
        "timestamp": "2025-06-29T04:30:02.728Z"
    },
    {
        "id": 18,
        "coin": "BTC",
        "volume_usd": "8484564329.976951",
        "transaction_count": "388943",
        "timestamp": "2025-06-29T05:30:01.899Z"
    },
    {
        "id": 19,
        "coin": "ETH",
        "volume_usd": "5612745478.198592",
        "transaction_count": "1404",
        "timestamp": "2025-06-29T05:30:02.773Z"
    },
    {
        "id": 20,
        "coin": "BTC",
        "volume_usd": "8326593631.557539",
        "transaction_count": "388943",
        "timestamp": "2025-06-29T06:30:02.232Z"
    },
    {
        "id": 21,
        "coin": "ETH",
        "volume_usd": "5533293046.047887",
        "transaction_count": "406",
        "timestamp": "2025-06-29T06:30:03.150Z"
    }
  ]
  return { data: mockData };
}