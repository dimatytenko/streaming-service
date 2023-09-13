'use client';
import styled from 'styled-components';
import Link from 'next/link';

import {Media} from '@/theme/breakpoints';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${({theme}) => theme.palette.dark.secondary};
`;

export const HeaderContent = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({theme}) => theme.palette.light.primary};
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({theme}) => theme.palette.dark.secondary};
  padding: 0 20px;
`;

export const FooterContent = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.palette.dark.primary};
`;

export const DesktopNavigationWrapper = styled.div`
  ${Media.down.l} {
    display: none;
  }
`;

export const MobileNavigationWrapper = styled.div`
  ${Media.up.l} {
    display: none;
  }
`;

export const Menu = styled.div`
  position: relative;
  z-index: 9990;
`;

export const StyledBody = styled.body`
  width: 100%;
`;

export const Logo = styled(Link)`
  position: relative;
  z-index: 9990;
`;
