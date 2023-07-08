'use client';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  flex-grow: 1;
  max-width: 300px;
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

export const ContentWrapper = styled.div`
  padding: 12px;
  margin-top: 8px;
  border-radius: 8px;
`;

export const StyledTitle = styled.h3`
  text-align: center;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;
`;

export const StyledText = styled.h6`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 400;
`;
