import localFont from 'next/font/local';

export const index = localFont({
  src: [
    {
      path: './Jost-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Jost-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-jost',
});
