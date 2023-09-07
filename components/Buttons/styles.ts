'use client';
import styled from 'styled-components';

export const StyledGoogleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4285f4;
  color: #fff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  gap: 8px;

  &:hover,
  &:focus {
    background-color: #357ae8;
  }
`;

export const StyledLinkTo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
