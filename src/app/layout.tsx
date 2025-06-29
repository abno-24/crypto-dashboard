import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Crypto Dashboard',
  description: 'A dashboard for visualizing cryptocurrency data',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}