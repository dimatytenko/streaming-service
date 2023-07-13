'use client';

import {searchNavItems} from '@/constants/common';
import {Menu, MenuProps} from 'antd';
import {SearchNavCard} from './styles';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (label: React.ReactNode, key: React.Key): MenuItem => {
  return {
    key,
    label,
  } as MenuItem;
};

const items: MenuProps['items'] = searchNavItems.map((item, i) => getItem(item, i));

export const GlobalSearchNav: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <SearchNavCard title="Search results">
      <Menu
        onClick={onClick}
        style={{width: 256, background: 'transparent'}}
        defaultSelectedKeys={undefined}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </SearchNavCard>
  );
};
