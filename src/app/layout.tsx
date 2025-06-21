import type { Metadata } from 'next';
import Header from '@/app/components/header/Header';
import './globals.css'; // Importing the global styles

export const metadata: Metadata = {
  title: 'E-commerce Store - Discover Our Products',
  description: 'A modern, responsive e-commerce store built with Next.js and TypeScript.',
  keywords: ['online store', 'online shopping', 'ecommerce'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
