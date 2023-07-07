'use client';
import styled from 'styled-components';

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  background: ${({theme}) => theme.palette.light.primary};
  min-height: calc(100vh - 200px);
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({theme}) => theme.palette.dark.secondary};
  color: ${({theme}) => theme.palette.light.primary};
  height: 100px;
  padding-left: 20px;
`;

export const FooterWrapper = HeaderWrapper;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;
