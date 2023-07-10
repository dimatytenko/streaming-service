'use client';
import styled from 'styled-components';
import {Button} from 'antd';

// import {Media} from '@/theme/breakpoints';

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  background: ${({theme}) => theme.palette.light.primary};
  border-top: none;
  margin: -12px;
`;

export const CardWrapper = styled.div`
  flex-grow: 1;
  max-width: 300px;
  margin: 12px;
  border: 2px solid ${({theme}) => theme.palette.light.secondary};
  border-radius: 8px;
`;

export const ImageWrapper = styled.div`
  padding: 4px;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 400px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ContentWrapper = styled.div`
  margin-top: 8px;
  border-radius: 8px;
  padding: 0 8px;
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

export const StyledButton = styled(Button)`
  margin: 0 auto;
  width: 200px;
  display: block;
  margin-top: 24px;
`;

export const NothingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
`;
