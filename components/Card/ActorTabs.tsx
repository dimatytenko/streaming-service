'use client';
import {POSTER_IMG_URL} from '@/constants/api';
import {CardVariants} from '@/constants/common';
import {Progress, Typography, Badge} from 'antd';
import {useState} from 'react';
import Image from 'next/image';

import {
  CardSubTitleText,
  ContentElementWrapper,
  ImageWrapper,
  InnerCardContentWrapper,
  StyledCard,
  StyledTitle,
  ImageActive,
} from './styles';
import {IActorMovies, IActorShows, IActorImages} from '@/types/actors';

const {Text} = Typography;

const tabList = [
  {
    key: 'tab1',
    tab: 'Films',
  },
  {
    key: 'tab2',
    tab: 'TV Shows',
  },
  {
    key: 'tab3',
    tab: 'Images',
  },
];

type CardWithTabsProps = {
  title: string;
  movies: IActorMovies;
  shows: IActorShows;
  images: IActorImages;
};

export const ActorTabs: React.FC<CardWithTabsProps> = ({title, movies, shows, images}) => {
  const [activeTabKey, setActiveTabKey] = useState<string>(tabList[0].key);
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };
  const contentList: Record<string, React.ReactNode> = {
    tab1: <FilmCardsContent data={movies} />,
    tab2: <ShowCardsContent data={shows} />,
    tab3: <ImagesCardsContent data={images} />,
  };

  return (
    <StyledCard
      $variant={CardVariants.PRIMARY}
      style={{width: '100%'}}
      title={title}
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={onTabChange}>
      {contentList[activeTabKey]}
    </StyledCard>
  );
};

type ActorMoviesProps = {
  data: IActorMovies;
};

const FilmCardsContent: React.FC<ActorMoviesProps> = ({data}) => {
  return (
    <>
      {data.cast
        .filter((i) => i.poster_path)
        .map((d) => (
          <ContentElementWrapper key={d.id}>
            <ImageWrapper>
              <ImageActive>
                <Image src={`${POSTER_IMG_URL}${d.poster_path}`} width={220} height={330} alt="film poster" />
              </ImageActive>
            </ImageWrapper>
            <Progress percent={Math.round(d.vote_average * 10)} strokeColor={{from: '#108ee9', to: '#87d068'}} />
            <StyledTitle level={5}>{d.title}</StyledTitle>
            <InnerCardContentWrapper>
              <CardSubTitleText>Release:</CardSubTitleText>
              <Text type="secondary">{d.release_date}</Text>
            </InnerCardContentWrapper>
            <InnerCardContentWrapper>
              <CardSubTitleText>Popularity:</CardSubTitleText>
              <Badge count={Math.round(d.popularity || 1)} color="#059d2f" overflowCount={10000} />
            </InnerCardContentWrapper>
            <InnerCardContentWrapper>
              <CardSubTitleText>Cote count:</CardSubTitleText>
              <Badge count={Math.round(d.vote_count || 1)} color="#000" overflowCount={10000} />
            </InnerCardContentWrapper>
          </ContentElementWrapper>
        ))}
    </>
  );
};

type ActorShowsProps = {
  data: IActorShows;
};

const ShowCardsContent: React.FC<ActorShowsProps> = ({data}) => {
  return (
    <>
      {data.cast
        .filter((i) => i.poster_path)
        .map((d) => (
          <ContentElementWrapper key={d.poster_path}>
            <ImageWrapper>
              <ImageActive>
                <Image src={`${POSTER_IMG_URL}${d.poster_path}`} width={220} height={330} alt="show poster" />
              </ImageActive>
            </ImageWrapper>
            <Progress percent={Math.round(d.vote_average * 10)} strokeColor={{from: '#108ee9', to: '#87d068'}} />
            <StyledTitle level={5}>{d.name}</StyledTitle>
            <InnerCardContentWrapper>
              <CardSubTitleText>Popularity:</CardSubTitleText>
              <Badge count={Math.round(d.popularity || 1)} color="#059d2f" overflowCount={10000} />
            </InnerCardContentWrapper>
          </ContentElementWrapper>
        ))}
    </>
  );
};

type ActorImagesProps = {
  data: IActorImages;
};

const ImagesCardsContent: React.FC<ActorImagesProps> = ({data}) => {
  return (
    <>
      {data.profiles.map((d) => (
        <ContentElementWrapper key={d.file_path}>
          <ImageWrapper>
            <Image src={`${POSTER_IMG_URL}${d.file_path}`} width={220} height={330} alt="actor image" />
          </ImageWrapper>
          <Progress percent={Math.round(d.vote_average * 10)} strokeColor={{from: '#108ee9', to: '#87d068'}} />
        </ContentElementWrapper>
      ))}
    </>
  );
};
