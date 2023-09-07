import React from 'react';
import {BsArrowRightCircleFill} from 'react-icons/bs';
import Link from 'next/link';

import {StyledLinkTo} from './styles';

type Props = {
  link: string;
  text: string;
};

export const LinkTo: React.FC<Props> = ({link, text}) => {
  return (
    <Link href={link}>
      <StyledLinkTo>
        {text}
        <BsArrowRightCircleFill />
      </StyledLinkTo>
    </Link>
  );
};
