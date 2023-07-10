'use client';
import {Spin} from 'antd';

import {LoaderWrapper} from './styles';

export const PageLoader = () => {
  return (
    <LoaderWrapper>
      <Spin size="large"></Spin>
    </LoaderWrapper>
  );
};

export const Loader = () => {
  return <Spin size="large"></Spin>;
};
