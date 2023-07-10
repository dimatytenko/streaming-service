import 'modern-normalize';
import './globals.css';
import {Footer} from '@/components/Layout/Footer';
import {Header} from '@/components/Layout/Header';
import {Lato} from 'next/font/google';
import {PropsWithChildren} from 'react';
import {Main} from './styles';
import {ThemeWrapper} from './themeWrapper';
import {RootStyleRegistry} from './rootStyleRegistry';
import {Container} from '@/app/styles';

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
          <RootStyleRegistry>
            <Header />
            <Main>
              <Container>{children}</Container>
            </Main>
            <Footer />
          </RootStyleRegistry>
        </ThemeWrapper>
      </body>
    </html>
  );
}
