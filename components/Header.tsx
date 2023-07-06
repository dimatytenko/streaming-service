import {HeaderWrapper} from '@/app/styles';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import {MenuLink, MenuWrapper} from './styles';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <Image src={logo} alt="logo" height={50} priority />
      </Link>
      <MenuWrapper>
        <MenuLink href="/movies">Movies</MenuLink>
        <MenuLink href="/tv">TV Shows</MenuLink>
        <MenuLink href="/actors">Actors</MenuLink>
      </MenuWrapper>
      <MenuWrapper>
        <MenuLink href="/auth">Log in</MenuLink>
      </MenuWrapper>
    </HeaderWrapper>
  );
};
