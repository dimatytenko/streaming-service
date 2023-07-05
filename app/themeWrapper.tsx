'use client';

import StyledComponentsRegistry from './registry';
import {ThemeProvider} from 'styled-components';
import {PropsWithChildren} from 'react';
import {defaultTheme} from '@/theme/theme';

export const ThemeWrapper: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
