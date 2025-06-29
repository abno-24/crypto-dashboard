'use client';

import { createChart, ColorType } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { CryptoData } from "@/types";

interface ChartProps {
  data: CryptoData[];
  coinFilter: 'BTC' | 'ETH' | 'both';
  type: 'volume' | 'transactions';
}

const Chart: React.FC<ChartProps> = ({ data, coinFilter, type }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Initialize chart
    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
      layout: {
        background: { type: ColorType.Solid, color: '#ffffff' },
        textColor: '#333',
      },
      grid: {
        vertLines: { color: '#f0f0f0' },
        horzLines: { color: '#f0f0f0' },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    // Prepare data
    const btcData = data
      .filter((d) => d.coin === 'BTC')
      .map((d) => ({
        time: new Date(d.timestamp).getTime() / 1000,
        value: type === 'volume' ? parseFloat(d.volume_usd) / 1e9 : parseInt(d.transaction_count)
      }))
      .sort((a, b) => a.time - b.time);

    const ethData = data
      .filter((d) => d.coin === 'ETH')
      .map((d) => ({
        time: new Date(d.timestamp).getTime() / 1000,
        value: type === 'volume' ? parseFloat(d.volume_usd) / 1e9 : parseInt(d.transaction_count),
      }))
      .sort((a, b) => a.time - b.time);

    // Add line series
    if (coinFilter === 'BTC' || coinFilter === 'both') {
      const btcSeries = chartRef.current.addLineSeries({
        color: '#f7931a',
        title: 'BTC',
      });
      btcSeries.setData(btcData);
    }

    if (coinFilter === 'ETH' || coinFilter === 'both') {
      const ethSeries = chartRef.current.addLineSeries({
        color: '#627eea',
        title: 'ETH',
      });
      ethSeries.setData(ethData);
    }

    // Auto-scale and fit content
    chartRef.current.timeScale().fitContent();

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartRef.current?.remove();
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