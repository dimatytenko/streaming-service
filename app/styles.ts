'use client';
import styled from 'styled-components';

import {Media} from '@/theme/breakpoints';

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  background: ${({theme}) => theme.palette.light.primary};
  min-height: calc(100vh - 200px);
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1540px;
  padding: 0 24px;
  margin: 0 auto;

  ${Media.down.m} {
    padding: 0 16px;
  }
`;
