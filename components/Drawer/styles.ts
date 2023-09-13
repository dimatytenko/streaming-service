'use client';

import styled from 'styled-components';
import Drawer from 'rc-drawer';

export const StyledDrawer = styled(Drawer)`
  &.rc-drawer-content {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px); /* for Safari */
    padding: 150px 16px 16px 16px;
  }
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  transition: all 0.3s ease-in-out;
`;
