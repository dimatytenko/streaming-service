'use client';
import {Dropdown} from 'antd';
import type {MenuProps} from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import {useSession, signOut} from 'next-auth/react';
import {
  MenuLink,
  MenuWrapper,
  MenuMoreLink,
  StyledSpan,
  AuthElementWrapper,
} from './styles';
import {ActorsPaths, MoviesPaths, ShowPaths} from '@/constants/common';
import {ImProfile} from 'react-icons/im';

interface INavigationProps {
  onClickItem?: () => void;
}

export const Navigation: React.FC<INavigationProps> = ({onClickItem}) => {
  const session = useSession();
  // console.log('session', session);
  const isHidden = false;

  const onLogoutClick = () => {
    signOut({callbackUrl: '/'});
    onClickItem && onClickItem();
  };

  return (
    <MenuWrapper>
      <MoviesMenuMore onClickItem={onClickItem} />
      <ShowsMenuMore onClickItem={onClickItem} />
      <ActorsMenuMore onClickItem={onClickItem} />
      {!isHidden && (
        <>
          {session?.data ? (
            <AuthElementWrapper>
              <MenuLink href="/profile">
                {session?.data?.user?.image ? (
                  <Image
                    style={{borderRadius: '8px'}}
                    src={session?.data?.user?.image}
                    width={40}
                    height={40}
                    alt="user logo"
                  />
                ) : (
                  <ImProfile />
                )}
              </MenuLink>
              <MenuLink href="#" onClick={onLogoutClick}>
                <StyledSpan>Log out</StyledSpan>
              </MenuLink>
            </AuthElementWrapper>
          ) : (
            <MenuLink href="/login" onClick={() => onClickItem?.()}>
              Log in
            </MenuLink>
          )}
        </>
      )}
    </MenuWrapper>
  );
};

interface INavigationItemProps {
  onClickItem?: () => void;
}

export const ActorsMenuMore: React.FC<INavigationItemProps> = ({
  onClickItem,
}) => {
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: (
        <Link href={ActorsPaths.ACTORS} onClick={onClickItem}>
          Popular
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <Link href={ActorsPaths.TODAY} onClick={onClickItem}>
          Popular today
        </Link>
      ),
    },
    {
      key: 3,
      label: (
        <Link href={ActorsPaths.WEEK} onClick={onClickItem}>
          Popular this week
        </Link>
      ),
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['hover']}>
      <MenuMoreLink>Actors</MenuMoreLink>
    </Dropdown>
  );
};

export const ShowsMenuMore: React.FC<INavigationItemProps> = ({
  onClickItem,
}) => {
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: (
        <Link href={ShowPaths.SHOWS} onClick={onClickItem}>
          Popular
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <Link href={ShowPaths.TODAY} onClick={onClickItem}>
          Popular today
        </Link>
      ),
    },
    {
      key: 3,
      label: (
        <Link href={ShowPaths.WEEK} onClick={onClickItem}>
          Popular this week
        </Link>
      ),
    },
    {
      key: 4,
      label: (
        <Link href={ShowPaths.ON_THE_AIR} onClick={onClickItem}>
          On the air
        </Link>
      ),
    },
    {
      key: 5,
      label: (
        <Link href={ShowPaths.TOP_RATED} onClick={onClickItem}>
          Top rated
        </Link>
      ),
    },
    {
      key: 6,
      label: (
        <Link href={ShowPaths.AIRING_TODAY} onClick={onClickItem}>
          Airing today
        </Link>
      ),
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['hover']}>
      <MenuMoreLink>TV Shows</MenuMoreLink>
    </Dropdown>
  );
};

export const MoviesMenuMore: React.FC<INavigationItemProps> = ({
  onClickItem,
}) => {
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: (
        <Link href={MoviesPaths.MOVIES} onClick={onClickItem}>
          Popular
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <Link href={MoviesPaths.TODAY} onClick={onClickItem}>
          Popular today
        </Link>
      ),
    },
    {
      key: 3,
      label: (
        <Link href={MoviesPaths.WEEK} onClick={onClickItem}>
          Popular this week
        </Link>
      ),
    },
  ];

  return (
    <Dropdown menu={{items}} trigger={['hover']}>
      <MenuMoreLink>Movies</MenuMoreLink>
    </Dropdown>
  );
};
