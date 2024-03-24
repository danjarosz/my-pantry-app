import type { Metadata } from 'next';
import { latoRegular } from '@/app/ui/fonts';
import clsx from 'clsx';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'My Pantry App',
  description: 'A clever pantry management app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={latoRegular.className}>{children}</body>
    </html>
  );
}
