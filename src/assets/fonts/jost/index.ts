import localFont from 'next/font/local';

export const jost = localFont({
  src: [
    { path: './Jost-Thin.ttf', weight: '100', style: 'normal' },
    { path: './Jost-ThinItalic.ttf', weight: '100', style: 'italic' },

    { path: './Jost-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: './Jost-ExtraLightItalic.ttf', weight: '200', style: 'italic' },

    { path: './Jost-Light.ttf', weight: '300', style: 'normal' },
    { path: './Jost-LightItalic.ttf', weight: '300', style: 'italic' },

    { path: './Jost-Regular.ttf', weight: '400', style: 'normal' },
    { path: './Jost-Italic.ttf', weight: '400', style: 'italic' },

    { path: './Jost-Medium.ttf', weight: '500', style: 'normal' },
    { path: './Jost-MediumItalic.ttf', weight: '500', style: 'italic' },

    { path: './Jost-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './Jost-SemiBoldItalic.ttf', weight: '600', style: 'italic' },

    { path: './Jost-Bold.ttf', weight: '700', style: 'normal' },
    { path: './Jost-BoldItalic.ttf', weight: '700', style: 'italic' },

    { path: './Jost-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './Jost-ExtraBoldItalic.ttf', weight: '800', style: 'italic' },

    { path: './Jost-Black.ttf', weight: '900', style: 'normal' },
    { path: './Jost-BlackItalic.ttf', weight: '900', style: 'italic' },
  ],
  variable: '--font-jost',
  display: 'swap',
});
