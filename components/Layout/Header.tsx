'use client';
import {HeaderWrapper} from '@/app/styles';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import {MenuLink, MenuWrapper, MenuMoreLink} from './styles';
import {ActorsPathes} from '@/constants/common';
import type {MenuProps} from 'antd';
import {Dropdown} from 'antd';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <Image src={logo} alt="logo" height={50} priority />
      </Link>
      <MenuWrapper>
        <MenuLink href="/movies">Movies</MenuLink>
        <MenuLink href="/tv">TV Shows</MenuLink>
        <MenuMore />
      </MenuWrapper>
      <MenuWrapper>
        <MenuLink href="/auth">Log in</MenuLink>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export const MenuMore = () => {
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: <Link href={ActorsPathes.ACTORS}>Popular</Link>,
    },
    {
      key: 2,
      label: <Link href={ActorsPathes.TODAY}>Popular today</Link>,
    },
    {
      key: 3,
      label: <Link href={ActorsPathes.WEEK}>Popular this week</Link>,
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['hover']}>
      <MenuMoreLink>Actors</MenuMoreLink>
    </Dropdown>
  );
};
