import React from 'react';
import {StyledSvg} from './styles';
import {SvgChildren} from './Children';
import {StyledSvgIconProps} from './types';

export const IconSvg: React.FC<StyledSvgIconProps> = ({className, type, width, fillChildren, height, strokeWidth}) => {
  if (!type) return null;

  return (
    <StyledSvg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      strokeWidth={strokeWidth}>
      <SvgChildren fillChildren={fillChildren} type={type} />
    </StyledSvg>
  );
};
