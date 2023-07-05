import 'modern-normalize';
import {Footer} from '@/components/Footer';
import {Header} from '@/components/Header';
import {Lato} from 'next/font/google';
import {PropsWithChildren} from 'react';
import {Main} from './styles';
import {ThemeWrapper} from './themeWrapper';

const lato = Lato({subsets: ['latin'], weight: ['300', '400', '700']});

export const metadata = {
  title: 'Streaming service',
  description: 'Your favorite movies almost free',
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ThemeWrapper>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
