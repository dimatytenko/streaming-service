'use client';
import {POSTER_IMG_URL} from '@/constants/api';
import {Typography} from 'antd';
import {CardWrapper, ImageWrapper, Image, StyledTitle} from './styles';
import {ActorsCardContentProps} from './types';
import noPhoto from '@/assets/No_image_available.png';

const {Text} = Typography;

export const ActorsCardContent: React.FC<ActorsCardContentProps> = ({card}) => {
  return (
    <CardWrapper key={card.id}>
      <ImageWrapper>
        <Image src={card.profile_path ? `${POSTER_IMG_URL}${card.profile_path}` : noPhoto.src} alt="actor" />
      </ImageWrapper>
      <StyledTitle level={5}>{card.name}</StyledTitle>
      <Text type="secondary">{card.name}</Text>
      <br />
      <Text type="secondary">{card.popularity}</Text>
      <br />
      <Text type="secondary">{card.gender === 2 ? 'man' : 'woman'}</Text>
    </CardWrapper>
  );
};
