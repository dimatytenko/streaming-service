'use client';

import styled from 'styled-components';
import Search from 'antd/es/input/Search';
import {Card} from 'antd';

export const StyledSearch = styled(Search)`
  &.ant-input-group-wrapper {
    width: 30%;
  }
  &.ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button:not(.ant-btn-primary) {
    border-left: none;
  }
`;

export const SearchNavCard = styled(Card)`
  height: fit-content;
  &.ant-card .ant-card-head {
    background: ${({theme}) => theme.palette.dark.primary};
    font-size: 24px;
    color: ${({theme}) => theme.palette.dark.secondary};
  }
  &.ant-card .ant-card-body {
    background: ${({theme}) => theme.palette.light.primary};
    border: ${({theme}) => `2px solid ${theme.palette.dark.primary}`};
    border-top: none;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    padding: 0;

    &::after,
    &::before {
      display: none;
    }
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
    color: ${({theme}) => theme.palette.dark.secondary};
  }
`;

export const GlobalSearchContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const StyledSpan = styled.span`
  font-weight: 400;
`;

export const StyledSpanBold = styled.span`
  font-weight: 700;
`;
