import Image from 'next/image';
import {Sling as Hamburger} from 'hamburger-react';

import logo from '@/assets/logo.png';
import {Navigation} from '@/components/Navigation';
import {Container} from '@/app/styles';
import {GlobalSearch} from '@/components/Search/GlobalSeach';
import {
  HeaderWrapper,
  HeaderContent,
  DesktopNavigationWrapper,
  MobileNavigationWrapper,
  Menu,
  Logo,
} from './styles';

interface IHeaderProps {
  toggleDrawer: () => void;
  onCloseDrawer: () => void;
  isOpen: boolean;
}

export const Header: React.FC<IHeaderProps> = ({
  isOpen,
  toggleDrawer,
  onCloseDrawer,
}) => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Logo href="/" onClick={onCloseDrawer}>
            <Image src={logo} alt="logo" height={50} priority />
          </Logo>
          <DesktopNavigationWrapper>
            <GlobalSearch />
          </DesktopNavigationWrapper>
          <DesktopNavigationWrapper>
            <Navigation />
          </DesktopNavigationWrapper>
          <MobileNavigationWrapper>
            <Menu onClick={toggleDrawer}>
              <Hamburger toggled={isOpen} aria-label="Burger button" />
            </Menu>
          </MobileNavigationWrapper>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};
