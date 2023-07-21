import {PropsWithChildren} from 'react';

import {SearchLayoutWrapper, LayoutContent} from '@/app/styles';
import {GlobalSearchNav} from '@/components/Search/GlobalSearchNav';

export default function SearchLayout({children}: PropsWithChildren) {
  return (
    <SearchLayoutWrapper>
      <GlobalSearchNav />
      <LayoutContent>{children}</LayoutContent>
    </SearchLayoutWrapper>
  );
}
