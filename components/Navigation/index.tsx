'use client';
import {Dropdown} from 'antd';
import type {MenuProps} from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import {useSession, signOut} from 'next-auth/react';
import {MenuLink, MenuWrapper, MenuMoreLink, StyledSpan, AuthElementWrapper} from './styles';
import {ActorsPaths, MoviesPaths, ShowPaths} from '@/constants/common';

export const Navigation = () => {
  const session = useSession();
  // console.log('session', session);
  const isHidden = true;
  return (
    <MenuWrapper>
      <MoviesMenuMore />
      <ShowsMenuMore />
      <ActorsMenuMore />
      {!isHidden && (
        <>
          {session?.data ? (
            <AuthElementWrapper>
              <MenuLink href="/profile">
                <Image
                  style={{borderRadius: '8px'}}
                  src={session?.data?.user!.image!}
                  width={40}
                  height={40}
                  alt="user logo"
                />
              </MenuLink>
              <MenuLink href="#" onClick={() => signOut({callbackUrl: '/'})}>
                <StyledSpan>Log out</StyledSpan>
              </MenuLink>
            </AuthElementWrapper>
          ) : (
            <MenuLink href="/auth">Log in</MenuLink>
          )}
        </>
      )}
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

export const MoviesMenuMore = () => {
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: <Link href={MoviesPaths.MOVIES}>Popular</Link>,
    },
    {
      key: 2,
      label: <Link href={MoviesPaths.TODAY}>Popular today</Link>,
    },
    {
      key: 3,
      label: <Link href={MoviesPaths.WEEK}>Popular this week</Link>,
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['hover']}>
      <MenuMoreLink>Movies</MenuMoreLink>
    </Dropdown>
  );
};
