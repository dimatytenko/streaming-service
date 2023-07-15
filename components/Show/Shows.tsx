'use client';
import {useEffect, useState} from 'react';
import {FloatButton} from 'antd';

import {CardsWrapper, StyledButton} from './styles';
import {ShowPaths, TimeFrame} from '@/constants/common';
import {PageLoader} from '@/components/Loader';
import {IShows} from '@/types/shows';
import {getAiringTodayShows, getOnTheAirShows, getTopRatedShows, getTrendingShows} from '@/services/shows';
import {ShowCard} from '@/components/Show/Show';

type Props = {
  timeFrame?: TimeFrame;
  type?: ShowPaths;
};

export const Shows: React.FC<Props> = ({timeFrame, type}) => {
  const [page, setPage] = useState(1);
  const [shows, setShows] = useState<IShows[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (page: number) => {
    try {
      setIsLoading(true);
      const data =
        type === ShowPaths.AIRING_TODAY
          ? await getAiringTodayShows(page)
          : type === ShowPaths.ON_THE_AIR
          ? await getOnTheAirShows(page)
          : type === ShowPaths.TOP_RATED
          ? await getTopRatedShows(page)
          : await getTrendingShows(timeFrame || TimeFrame.DAY, page);
      if (!!shows.length) {
        setShows((prev) => [...prev, ...data.results]);
      } else {
        setShows(data.results);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  if (loading) {
    return <PageLoader />;
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <CardsWrapper>
        {shows.map((card) => (
          <ShowCard key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <StyledButton type="primary" onClick={handleLoadMore} loading={isLoading}>
        Add more
      </StyledButton>
      <FloatButton.BackTop />
    </>
  );
};
