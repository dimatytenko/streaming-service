import {HeaderWrapper, HeaderContent} from './styles';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import {Navigation} from '../Navigation';
import {Container} from '@/app/styles';
import {GlobalSearch} from '../Search/GlobalSeach';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Link href="/">
            <Image src={logo} alt="logo" height={50} priority />
          </Link>
          <GlobalSearch />
          <Navigation />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};
