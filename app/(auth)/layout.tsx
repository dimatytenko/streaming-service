import {PropsWithChildren} from 'react';

import {LayoutWrapper} from '@/app/styles';

export default function ActorsLayout({children}: PropsWithChildren) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
