'use client';
import styled from 'styled-components';
import {Media} from '@/theme/breakpoints';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const LayoutContent = styled.div``;

export const ActorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  background: ${({theme}) => theme.palette.light.primary};
  border-top: none;
  margin: -12px;

  ${Media.down.m} {
    justify-content: center;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: right;
`;
