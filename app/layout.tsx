import { RootProvider } from 'fumadocs-ui/provider/next';
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
