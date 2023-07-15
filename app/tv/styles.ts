'use client';
import styled from 'styled-components';
import {Media} from '@/theme/breakpoints';

export const ShowWrapper = styled.div`
  display: flex;
  gap: 24px;

  ${Media.down.m} {
    flex-direction: column;
  }
`;
