'use client';

import {DrawerProps} from 'rc-drawer';
import {StyledDrawer, NavList} from './styles';
import {GlobalSearch} from '@/components/Search/GlobalSeach';
import {Navigation} from '@/components/Navigation';

type IDrawerProps = DrawerProps & {
  onClickItem?: () => void;
};

export const Drawer: React.FC<IDrawerProps> = ({onClickItem, ...props}) => {
  return (
    <StyledDrawer {...props}>
      <NavList>
        <GlobalSearch onClickItem={onClickItem} />
        <Navigation onClickItem={onClickItem} />
      </NavList>
    </StyledDrawer>
  );
};
