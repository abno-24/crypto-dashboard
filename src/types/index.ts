import { Time } from 'lightweight-charts';

export interface CryptoData {
  id: number;
  coin: 'BTC' | 'ETH';
  volume_usd: string;
  transaction_count: string;
  timestamp: string;
}

export interface ChartDataPoint {
  time: Time;
  value: number;
}