'use client';

import {POSTER_IMG_URL} from '@/constants/api';
import {CardWrapper, ImageWrapper, Image, ContentWrapper, StyledTitle, StyledText} from './styles';
import {ActorsCardContentProps} from './types';
import noPhoto from '@/assets/No_image_available.png';

export const ActorsCardContent: React.FC<ActorsCardContentProps> = ({card}) => {
  return (
    <CardWrapper key={card.id}>
      <ImageWrapper>
        <Image src={card.profile_path ? `${POSTER_IMG_URL}${card.profile_path}` : noPhoto.src} alt="actor" />
      </ImageWrapper>
      <ContentWrapper>
        <StyledTitle>{card.name}</StyledTitle>
        <StyledText>{card.name}</StyledText>
        <StyledText>{card.popularity}</StyledText>
        <StyledText>{card.gender === 2 ? 'man' : 'woman'}</StyledText>
      </ContentWrapper>
    </CardWrapper>
  );
};
