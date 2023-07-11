'use client';
import styled from 'styled-components';
import {Card} from 'antd';
import Title from 'antd/es/typography/Title';
import {CardVariants} from '@/constants/common';

export const StyledCard = styled(Card)<{$variant: CardVariants}>`
  &.ant-card .ant-card-head {
    background: ${({theme, $variant}) =>
      $variant === CardVariants.PRIMARY ? theme.palette.dark.primary : theme.palette.dark.secondary};
    font-size: 24px;
    color: ${({theme, $variant}) =>
      $variant === CardVariants.PRIMARY ? theme.palette.dark.secondary : theme.palette.dark.primary};
  }
  &.ant-card .ant-card-body {
    background: ${({theme, $variant}) =>
      $variant === CardVariants.PRIMARY ? theme.palette.light.primary : theme.palette.dark.primary};
    border: ${({theme, $variant}) =>
      `2px solid ${$variant === CardVariants.PRIMARY ? theme.palette.dark.primary : theme.palette.dark.secondary}`};
    border-top: none;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    &::after,
    &::before {
      display: none;
    }
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
    color: ${({theme}) => theme.palette.dark.secondary};
  }
`;

export const ContentElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  border-radius: 8px;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
`;

export const ContentElementImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const StyledTitle = styled(Title)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
  margin-bottom: 0 !important;
`;

export const CardSubTitleText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.palette.dark.secondary};
  margin-right: 10px;
`;

export const InnerCardContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
