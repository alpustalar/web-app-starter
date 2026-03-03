'use client';
import { getSafeImageUrl } from '@/utils';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ClientOnly } from '@/components/shared/utils';
import { useWindowSize } from 'react-use';

export const Logo = () => {
  const { resolvedTheme } = useTheme();

  const logoBlack = '/images/logo/logo-black.png';
  const logoWhite = '/images/logo/logo-white.png';
  const image = getSafeImageUrl(
    resolvedTheme === 'dark' ? logoWhite : logoBlack
  );

  const { width } = useWindowSize();
  return (
    <ClientOnly>
      <Link href="/">
        <Image
          unoptimized={false}
          src={image}
          alt="logo"
          width={width >= 1024 ? 200 : 150}
          height={width >= 1024 ? 70 : 50}
          style={{ objectFit: 'cover' }}
        />
      </Link>
    </ClientOnly>
  );
};
