'use client';
import React from 'react';
import {NextFont} from 'next/dist/compiled/@next/font';
import {Drawer} from '@/components/Drawer';

import {Container} from '@/app/styles';
import {Footer} from '@/components/Layout/Footer';
import {Header} from '@/components/Layout/Header';
import {Main} from '@/app/styles';
import {useDrawer} from '@/hooks/useDrawer';
import {StyledBody} from './styles';

interface ILayoutProps {
  font: NextFont;
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({children, font}) => {
  const {isOpen, toggleDrawer, closeHandler} = useDrawer();
  console.log('isOpen', isOpen);

  return (
    <StyledBody className={font.className}>
      <Header
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        onCloseDrawer={closeHandler}
      />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
      <Drawer
        onClickItem={closeHandler}
        open={isOpen}
        onClose={toggleDrawer}
        width={'100%'}
        placement={'right'}
      />
    </StyledBody>
  );
};
