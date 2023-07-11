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
  width: 220px;
  margin: 12px;
  border: 2px solid ${({theme}) => theme.palette.light.secondary};
  border-radius: 8px;
  cursor: pointer;
  padding: 4px;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
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
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.palette.dark.secondary};
  margin-right: 10px;
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

export const InnerCardContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
