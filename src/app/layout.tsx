import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StoreIT",
  description: "The ultimate storage solution is here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
