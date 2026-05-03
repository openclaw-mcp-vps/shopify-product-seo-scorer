import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Product SEO Scorer",
  description: "Analyze and score your Shopify product pages for SEO best practices. Benchmark against competitors and get actionable recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="75d312c4-23a5-49fb-bd36-b409a4c7bce8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
