import localFont from 'next/font/local';

export const figtree = localFont({
  src: [
    { path: './Figtree-Light.ttf', weight: '300', style: 'normal' },
    { path: './Figtree-LightItalic.ttf', weight: '300', style: 'italic' },

    { path: './Figtree-Regular.ttf', weight: '400', style: 'normal' },
    { path: './Figtree-Italic.ttf', weight: '400', style: 'italic' },

    { path: './Figtree-Medium.ttf', weight: '500', style: 'normal' },
    { path: './Figtree-MediumItalic.ttf', weight: '500', style: 'italic' },

    { path: './Figtree-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './Figtree-SemiBoldItalic.ttf', weight: '600', style: 'italic' },

    { path: './Figtree-Bold.ttf', weight: '700', style: 'normal' },
    { path: './Figtree-BoldItalic.ttf', weight: '700', style: 'italic' },

    { path: './Figtree-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './Figtree-ExtraBoldItalic.ttf', weight: '800', style: 'italic' },

    { path: './Figtree-Black.ttf', weight: '900', style: 'normal' },
    { path: './Figtree-BlackItalic.ttf', weight: '900', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-figtree',
});
