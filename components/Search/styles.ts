import styled from 'styled-components';
import Search from 'antd/es/input/Search';

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
