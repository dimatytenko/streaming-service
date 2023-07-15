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

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;
export const LayoutContent = styled.div``;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaginationWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: right;
`;

export const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const SearchWrapper = styled.div`
  margin: 0 auto 24px;
`;

export const SearchPageWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;
