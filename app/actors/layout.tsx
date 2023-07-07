import React from 'react';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

import {LayoutWrapper, LayoutHeader, StyledTitle, StyledTabs, StyledTab} from './styles';

export default function Actorslayout({children}: PropsWithChildren) {
  return (
    <LayoutWrapper>
      <LayoutHeader>
        <StyledTitle>Most trending actors</StyledTitle>
        <StyledTabs>
          <StyledTab>
            <Link href="/actors/today">Today</Link>
          </StyledTab>
          <StyledTab>
            <Link href="/actors/week">This Week</Link>
          </StyledTab>
        </StyledTabs>
      </LayoutHeader>
      {children}
    </LayoutWrapper>
  );
}
