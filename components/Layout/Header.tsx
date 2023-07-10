import {HeaderWrapper} from '@/app/styles';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import {Navigation} from '../Navigation';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <Image src={logo} alt="logo" height={50} priority />
      </Link>
      <Navigation />
    </HeaderWrapper>
  );
};
