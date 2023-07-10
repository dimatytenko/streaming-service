import {PropsWithChildren} from 'react';

import {LayoutWrapper, LayoutContent, SearchWrapper} from './styles';
import {SearchComponent} from '@/components/Search';
import {ActorsPathes} from '@/constants/common';

export default function Actorslayout({children}: PropsWithChildren) {
  return (
    <LayoutWrapper>
      <SearchWrapper>
        <SearchComponent route={ActorsPathes.SEARCH} placeholder={'enter the name of the actor'} />
      </SearchWrapper>
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
}
