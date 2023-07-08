import {HeaderWrapper} from '@/app/styles';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import {MenuLink, MenuWrapper} from './styles';
import {ActorsPathes} from '@/constants/common';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <Image src={logo} alt="logo" height={50} priority />
      </Link>
      <MenuWrapper>
        <MenuLink href="/movies">Movies</MenuLink>
        <MenuLink href="/tv">TV Shows</MenuLink>
        <MenuLink href={ActorsPathes.ALL}>Actors</MenuLink>
      </MenuWrapper>
      <MenuWrapper>
        <MenuLink href="/auth">Log in</MenuLink>
      </MenuWrapper>
    </HeaderWrapper>
  );
};
