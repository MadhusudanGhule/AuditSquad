import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Audit Squad - Inventory Audit Specialists',
  description: 'Professional inventory auditing services to ensure your business maintains accurate stock records. Expert auditors, fast turnaround, and comprehensive reports.',
  keywords: 'inventory audit, stock verification, warehouse compliance, audit trail, inventory management, physical inventory, cycle counting',
  openGraph: {
    title: 'Audit Squad - Inventory Audit Specialists',
    description: 'Professional inventory auditing services to ensure your business maintains accurate stock records.',
    images: [
      {
        url: 'https://images.pexels.com/photos/7639360/pexels-photo-7639360.jpeg',
        width: 1200,
        height: 630,
        alt: 'Audit Squad - Professional Inventory Auditing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audit Squad - Inventory Audit Specialists',
    description: 'Professional inventory auditing services to ensure your business maintains accurate stock records.',
    images: ['https://images.pexels.com/photos/7639360/pexels-photo-7639360.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}