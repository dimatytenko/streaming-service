export type icon = (typeof iconOptions)[number];

export const iconOptions = <const>['movie', 'tv', 'person'];

export interface StyledSvgIconProps {
  className?: string;
  type?: icon;
  width?: string;
  height?: string;
  fillChildren?: string | 'none';
  strokeWidth?: number;
}
