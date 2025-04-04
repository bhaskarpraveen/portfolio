
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Bhaskar Praveen",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-google-analytics-opt-out="true">
      <body className={`${inter.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
