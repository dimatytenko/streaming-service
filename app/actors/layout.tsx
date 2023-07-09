import React from 'react';
import {PropsWithChildren} from 'react';

import {LayoutWrapper, LayoutContent} from './styles';

export default function Actorslayout({children}: PropsWithChildren) {
  return (
    <LayoutWrapper>
      <div>Most trending actors</div>
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
}
