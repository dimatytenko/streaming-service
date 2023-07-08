import React from 'react';
import {PropsWithChildren} from 'react';

import {LayoutWrapper, LayoutContent} from './styles';
import {LayoutHeader} from '@/components/Card/LayoutHeader';
import {ActorsPathes} from '@/constants/common';

const tabs = [
  {
    path: ActorsPathes.ALL,
    title: 'All',
  },
  {
    path: ActorsPathes.TODAY,
    title: 'Today',
  },
  {
    path: ActorsPathes.WEEK,
    title: 'This Week',
  },
];

export default function Actorslayout({children}: PropsWithChildren) {
  return (
    <LayoutWrapper>
      <LayoutHeader title={'Most trending actors'} tabs={tabs} />
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
}
