import { Inter, Lato } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
  subsets: ['latin-ext'],
  display: 'swap'
});

export const latoThin = Lato({
  weight: '100',
  style: 'normal',
  subsets: ['latin-ext'],
  display: 'swap'
});

export const latoThinItalic = Lato({
  weight: '100',
  style: 'italic',
  subsets: ['latin-ext'],
  display: 'swap'
});

export const latoRegular = Lato({
  weight: '400',
  style: 'normal',
  subsets: ['latin-ext'],
  display: 'swap'
});

export const latoRegularItalic = Lato({
  weight: '400',
  style: 'italic',
  subsets: ['latin-ext'],
  display: 'swap'
});

export const latoBold = Lato({
  weight: '700',
  style: 'normal',
  subsets: ['latin-ext'],
  display: 'swap'
});

export const latoBoldItalic = Lato({
  weight: '700',
  style: 'italic',
  subsets: ['latin-ext'],
  display: 'swap'
});
