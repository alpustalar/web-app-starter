import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/providers';
import { figtree, jost } from '@/assets/fonts';
import { LayoutShell } from '@/app/_components/layout-shell';

export const metadata: Metadata = {
  title: 'Zaman Kapsülüm',
};

type Props = {
  children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="tr" className={figtree.variable}>
      <body className={`${jost.variable}`}>
        <Providers>
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
