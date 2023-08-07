'use client';

import {useRouter} from 'next/navigation';
import {Badge, Progress} from 'antd';
import Image from 'next/image';
import {POSTER_IMG_URL} from '@/constants/api';
import {
  CardWrapper,
  ImageWrapper,
  ContentWrapper,
  StyledTitle,
  StyledText,
  InnerCardContentWrapper,
} from '@/components/styles';
import noPhoto from '@/assets/No_image_available.png';
import {IMovies} from '@/types/movies';
import {MoviesPaths} from '@/constants/common';
import {CardSubTitleText} from '@/components/Card/styles';

type Props = {
  card: IMovies;
};
export const MovieCard: React.FC<Props> = ({card}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${MoviesPaths.MOVIES}/${card.id}`);
  };
  return (
    <CardWrapper onClick={handleClick}>
      <ImageWrapper>
        <Image
          src={card.poster_path ? `${POSTER_IMG_URL}${card.poster_path}` : noPhoto}
          width={220}
          height={330}
          alt="actor"
        />
      </ImageWrapper>
      <Progress percent={Math.round(card.vote_average * 10)} strokeColor={{from: '#108ee9', to: '#87d068'}} />
      <ContentWrapper>
        <StyledTitle>{card.title}</StyledTitle>
        <InnerCardContentWrapper>
          <StyledText>Popularity:</StyledText>
          <Badge count={Math.round(card?.popularity || 0)} color="#059d2f" overflowCount={10000} />
        </InnerCardContentWrapper>
        <InnerCardContentWrapper>
          <CardSubTitleText>Vote count:</CardSubTitleText>
          <Badge count={Math.round(card.vote_count || 1)} color="#000" overflowCount={10000} />
        </InnerCardContentWrapper>
        <InnerCardContentWrapper>
          <CardSubTitleText>Release:</CardSubTitleText>
          <CardSubTitleText>{card.release_date}</CardSubTitleText>
        </InnerCardContentWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};
