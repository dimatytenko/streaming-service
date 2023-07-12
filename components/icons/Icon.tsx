import React, {PropsWithChildren} from 'react';
import {IconContainer} from './styles';

export const Icon: React.FC<PropsWithChildren> = ({children}) => {
  return <IconContainer>{children}</IconContainer>;
};
