import {PropsWithChildren} from 'react';

import {LayoutWrapper, LayoutContent} from '../styles';

export default function ActorsLayout({children}: PropsWithChildren) {
  return (
    <LayoutWrapper>
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
}
