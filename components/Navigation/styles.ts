'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const MenuLink = styled(Link)`
  color: ${({theme}) => theme.palette.dark.primary};
  text-decoration: none;
  font-weight: 300;
  font-size: 24px;
`;

export const MenuMoreLink = styled.div`
  color: ${({theme}) => theme.palette.dark.primary};
  text-decoration: none;
  font-weight: 300;
  font-size: 24px;
`;

export const AuthElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSpan = styled.span`
  font-weight: 300;
  font-size: 14px;
`;
