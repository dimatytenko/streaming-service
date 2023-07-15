import {PropsWithChildren} from 'react';

import {LayoutWrapper, LayoutContent, SearchWrapper} from '@/app/styles';
import {SearchComponent} from '@/components/Search/Search';
import {ActorsPaths} from '@/constants/common';

export default function ActorsLayout({children}: PropsWithChildren) {
  return (
    <LayoutWrapper>
      <SearchWrapper>
        <SearchComponent route={ActorsPaths.SEARCH} placeholder={'enter the name of the actor'} />
      </SearchWrapper>
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
}
