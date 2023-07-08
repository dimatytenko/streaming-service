'use client';
import {FC} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import {HeaderWrapper, StyledTitle, StyledTabs, StyledTab} from './styles';

type Props = {
  title?: string;
  tabs?: {
    path: string;
    title: string;
  }[];
};

export const LayoutHeader: FC<Props> = ({title, tabs}) => {
  const pathname = usePathname();

  return (
    <HeaderWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledTabs>
        {tabs?.map((tab) => (
          <StyledTab key={tab.path} $isPath={pathname === tab.path}>
            <Link href={tab.path}>{tab.title}</Link>
          </StyledTab>
        ))}
      </StyledTabs>
    </HeaderWrapper>
  );
};
