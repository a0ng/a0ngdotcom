import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Alex Ong — Projects & Tools', template: '%s — Alex Ong' },
  description:
    'Useful tools for oddly specific problems. Projects and experiments by Alex Ong.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}
