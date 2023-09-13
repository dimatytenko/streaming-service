import {PropsWithChildren} from 'react';
import 'modern-normalize';
import {Lato} from 'next/font/google';
import 'rc-drawer/assets/index.css';

import './globals.css';
import {ThemeWrapper} from './themeWrapper';
import {RootStyleRegistry} from './rootStyleRegistry';
import {SessionWrapper} from './sessionWrapper';
import {Layout} from '@/components/Layout';

const lato = Lato({subsets: ['latin'], weight: ['300', '400', '700']});

export const metadata = {
  title: 'Streaming service',
  description: 'Your favorite movies almost free',
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <SessionWrapper>
        <ThemeWrapper>
          <RootStyleRegistry>
            <Layout font={lato}>{children}</Layout>
          </RootStyleRegistry>
        </ThemeWrapper>
      </SessionWrapper>
    </html>
  );
}
