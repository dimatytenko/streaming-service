'use client';
import {Dropdown} from 'antd';
import type {MenuProps} from 'antd';
import Link from 'next/link';
import {MenuLink, MenuWrapper, MenuMoreLink} from './styles';
import {ActorsPaths, ShowPaths} from '@/constants/common';

export const Navigation = () => {
  return (
    <MenuWrapper>
      <MenuLink href="/movies">Movies</MenuLink>
      <ShowsMenuMore />
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

export const ShowsMenuMore = () => {
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: <Link href={ShowPaths.SHOWS}>Popular</Link>,
    },
    {
      key: 2,
      label: <Link href={ShowPaths.TODAY}>Popular today</Link>,
    },
    {
      key: 3,
      label: <Link href={ShowPaths.WEEK}>Popular this week</Link>,
    },
    {
      key: 4,
      label: <Link href={ShowPaths.ON_THE_AIR}>On the air</Link>,
    },
    {
      key: 5,
      label: <Link href={ShowPaths.TOP_RATED}>Top rated</Link>,
    },
    {
      key: 6,
      label: <Link href={ShowPaths.AIRING_TODAY}>Airing today</Link>,
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['hover']}>
      <MenuMoreLink>TV Shows</MenuMoreLink>
    </Dropdown>
  );
};
