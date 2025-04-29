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
  description: 'Launch your tech career with expert guidance, training, and mentorship programs.',
  icons: {
    icon: '/assets/tabicon.png',
    apple: '/assets/tabicon.png',
    shortcut: '/assets/tabicon.png',
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
        <link rel="icon" href="tabicon.png" />
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