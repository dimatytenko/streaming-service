'use client';

import {searchNavItems} from '@/constants/common';
import {updateSearchParam} from '@/helpers/common';
import {Menu, MenuProps} from 'antd';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const onClick: MenuProps['onClick'] = (e) => {
    const newParamValue = searchNavItems[+e.key].toLowerCase().replace(/\s/g, '');
    const updatedSearchParams = updateSearchParam(searchParams, 'filter', newParamValue);
    router.push(`${pathName}?${updatedSearchParams.toString()}`, {shallow: true});
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
