'use client';
import {Dropdown} from 'antd';
import type {MenuProps} from 'antd';
import Link from 'next/link';
import {MenuLink, MenuWrapper, MenuMoreLink} from './styles';
import {ActorsPaths} from '@/constants/common';

export const Navigation = () => {
  return (
    <MenuWrapper>
      <MenuLink href="/movies">Movies</MenuLink>
      <MenuLink href="/tv">TV Shows</MenuLink>
      <ActorsMenuMore />
      <MenuLink href="/auth">Log in</MenuLink>
    </MenuWrapper>
  );
};

export const ActorsMenuMore = () => {
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: <Link href={ActorsPaths.ACTORS}>Popular</Link>,
    },
    {
      key: 2,
      label: <Link href={ActorsPaths.TODAY}>Popular today</Link>,
    },
    {
      key: 3,
      label: <Link href={ActorsPaths.WEEK}>Popular this week</Link>,
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['hover']}>
      <MenuMoreLink>Actors</MenuMoreLink>
    </Dropdown>
  );
};
