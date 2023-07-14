'use client';
import {useRouter} from 'next/navigation';
import {Badge, Typography} from 'antd';
import Image from 'next/image';

import {POSTER_IMG_URL} from '@/constants/api';
import {CardWrapper, ImageWrapper, ContentWrapper, StyledTitle, StyledText, InnerCardContentWrapper} from './styles';
import {ActorsCardContentProps} from './types';
import noPhoto from '@/assets/No_image_available.png';
import {ActorsPaths} from '@/constants/common';

const {Text} = Typography;

export const ActorsCardContent: React.FC<ActorsCardContentProps> = ({card}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${ActorsPaths.ACTORS}/${card.id}`);
  };
  return (
    <CardWrapper key={card.id} onClick={handleClick}>
      <ImageWrapper>
        <Image
          src={card.profile_path ? `${POSTER_IMG_URL}${card.profile_path}` : noPhoto}
          width={220}
          height={330}
          alt="actor"
        />
      </ImageWrapper>
      <ContentWrapper>
        <StyledTitle>{card.name}</StyledTitle>
        <InnerCardContentWrapper>
          <StyledText>Popularity:</StyledText>
          <Badge count={Math.round(card?.popularity || 0)} color="#059d2f" overflowCount={10000} />
        </InnerCardContentWrapper>
        <InnerCardContentWrapper>
          <StyledText>Gender:</StyledText>
          <Text type="secondary">{card.gender === 2 ? 'man' : 'woman'}</Text>
        </InnerCardContentWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};
