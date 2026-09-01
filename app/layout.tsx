import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fitygrey.github.io/ropejoy-privacy-policy/'),
  title: {
    default: 'RopeJoy — Apple Watch Jump Rope Companion',
    template: '%s — RopeJoy',
  },
  description: 'Privacy, support, and product information for RopeJoy, the Apple Watch jump-rope companion.',
  openGraph: {
    title: 'RopeJoy — Every jump, beautifully counted.',
    description: 'Privacy, support, and product information for the RopeJoy Apple Watch jump-rope companion.',
    images: [{ url: 'og.png', width: 1200, height: 630, alt: 'RopeJoy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RopeJoy — Every jump, beautifully counted.',
    description: 'Privacy, support, and product information for the RopeJoy Apple Watch jump-rope companion.',
    images: ['og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
