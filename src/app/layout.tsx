import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Gameinside – Nederlands Gaming & Tech Nieuws',
    template: '%s | Gameinside',
  },
  description:
    'Gameinside is de Nederlandse bron voor gaming nieuws, reviews, previews en de nieuwste tech. Dagelijks bijgewerkt.',
  keywords: ['gaming nieuws', 'game reviews', 'PlayStation', 'Xbox', 'Nintendo', 'PC gaming', 'tech nieuws'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0f0f0f] text-[#e8e8e8] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
