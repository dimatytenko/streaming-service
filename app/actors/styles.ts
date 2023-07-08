'use client';
import styled from 'styled-components';
import {Button} from 'antd';
import {Media} from '@/theme/breakpoints';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const LayoutContent = styled.div`
  border: 1px solid ${({theme}) => theme.palette.dark.primary};
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

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

export const StyledButton = styled(Button)`
  margin: 0 auto;
  max-width: 300px;
  display: block;
`;
