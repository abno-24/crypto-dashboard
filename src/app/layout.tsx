import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Crypto Dashboard',
  description: 'A dashboard for visualizing cryptocurrency data',
};

/**
 * The root layout for the app, which wraps each page in an HTML document structure.
 * This is necessary because Next.js pages are rendered as fragments, but we need to
 * provide a full document for the browser to render.
 *
 * This layout component is special, because it will be rendered on the server and
 * client side. As such, it should not contain any state or effects that rely on the
 * browser environment.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}