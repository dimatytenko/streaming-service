import React from 'react';
import {MovieIcon, PersonIcon, TvIcon} from './paths';
import {StyledSvgIconProps} from './types';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({type}) => {
  if (type === 'movie') {
    return <MovieIcon />;
  }
  if (type === 'tv') {
    return <TvIcon />;
  }
  if (type === 'person') {
    return <PersonIcon />;
  }

  return null;
};
