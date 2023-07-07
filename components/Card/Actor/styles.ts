'use client';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  flex-grow: 1;
  max-width: 240px;
  margin: 12px;
`;

export const ImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 300px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledTitle = styled.h3`
  text-align: center;
`;
