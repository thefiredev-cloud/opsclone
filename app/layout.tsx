import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpsClone - Clone Your Best Operator",
  description: "AI that watches how your top performer works, then replicates their decisions across your entire operation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
