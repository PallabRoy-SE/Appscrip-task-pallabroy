import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const simplonNorm = localFont({
  src: [
    {
      path: './fonts/SimplonNorm-Regular-WebS.woff',
      style: 'normal',
    },
    {
      path: './fonts/SimplonNorm-RegularItalic-WebS.woff',
      style: 'italic',
    },
  ],
});

export const inter = Inter({ subsets: ['latin'] });
