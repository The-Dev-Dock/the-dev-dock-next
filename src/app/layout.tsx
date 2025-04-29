import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import '../styles/custom.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Dev Dock - Launch Your Tech Career',
  description: 'Launch your tech career with expert guidance, training, and mentorship programs. Discover coding bootcamps, career services, and developer resources.',
  
  // Basic metadata
  applicationName: 'The Dev Dock',
  authors: [{ name: 'The Dev Dock Team' }],
  generator: 'Next.js',
  keywords: ['tech career', 'coding bootcamp', 'developer training', 'tech mentorship', 'programming courses', 'career coaching', 'software development'],
  
  // OpenGraph metadata for social sharing
  openGraph: {
    title: 'The Dev Dock - Launch Your Tech Career',
    description: 'Expert tech training, mentorship programs, and career resources to help you break into the tech industry.',
    url: 'https://www.thedevdock.com',
    siteName: 'The Dev Dock',
    images: [
      {
        url: 'https://www.thedevdock.com/assets/devDock.png',
        width: 1200,
        height: 630,
        alt: 'The Dev Dock - Tech Career Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'The Dev Dock - Launch Your Tech Career',
    description: 'Expert tech training, mentorship programs, and career resources to help you break into the tech industry.',
    images: ['https://www.thedevdock.com/assets/appicon.png'],
  },
  
  // Icons
  icons: {
    icon: [
      { url: 'https://www.thedevdock.com/assets/tabicon.png' },
      { url: 'https://www.thedevdock.com/assets/appicon.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://www.thedevdock.com/assets/appicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: 'https://www.thedevdock.com/assets/tabicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: 'https://www.thedevdock.com/assets/tabicon.png',
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.thedevdock.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="icon" href="assets/tabicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Dev Dock",
              url: "https://www.thedevdock.com",
              logo: "https://www.thedevdock.com/assets/appicon.png",
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}