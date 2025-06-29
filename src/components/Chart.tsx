'use client';

import { createChart, ColorType, Time, IChartApi, LineSeries, ISeriesApi } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { CryptoData, ChartDataPoint } from "@/types";

interface ChartProps {
  data: CryptoData[];
  coinFilter: 'BTC' | 'ETH' | 'both';
  type: 'volume' | 'transactions';
}

const Chart: React.FC<ChartProps> = ({ data, coinFilter, type }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Line'>[]>([]);

  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    // Initialize chart
    const chart = createChart(container, {
      width: container.clientWidth,
      height: 300,
      layout: {
        background: { type: ColorType.Solid, color: '#ffffff' },
        textColor: '#000',
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    chartRef.current = chart;

    const formatData = (coin: 'BTC' | 'ETH'): ChartDataPoint[] =>
      data
        .filter((d) => d.coin === coin)
        .map((d) => {
          const value =
            type === 'volume'
              ? parseFloat(d.volume_usd) / 1e9
              : parseInt(d.transaction_count);
          if (isNaN(value)) return null;
          return {
            time: Math.floor(new Date(d.timestamp).getTime() / 1000) as Time,
            value,
          };
        })
        .filter((d): d is ChartDataPoint => d !== null)
        .sort((a, b) => (a.time as number) - (b.time as number));


    if (coinFilter === 'BTC' || coinFilter === 'both') {
      const btcSeries = chart.addSeries(LineSeries, { lineWidth: 2, color: '#f7931a' });
      btcSeries.setData(formatData('BTC'));
      seriesRef.current.push(btcSeries);
    }

    if (coinFilter === 'ETH' || coinFilter === 'both') {
      const ethSeries = chart.addSeries(LineSeries, { lineWidth: 2, color: '#627eea' });
      ethSeries.setData(formatData('ETH'));
      seriesRef.current.push(ethSeries);
    }

    chart.timeScale().fitContent();

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data, coinFilter, type]);

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold mb-2">
        {type === 'volume' ? '24-Hour Trading Volume (USD, Billions)' : '24-Hour Transaction Count'}
      </h2>
      <div ref={chartContainerRef} className="w-full h-[300px]" />
    </div>
  )
}

export default Chart;