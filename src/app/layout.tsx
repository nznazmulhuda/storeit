import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* navbar */}
        <Navbar />

        {/* next all content will appeare here */}
        {children}

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
