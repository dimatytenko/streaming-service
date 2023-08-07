'use client';
import {useEffect, useState} from 'react';
import {FloatButton} from 'antd';

import {CardsWrapper, StyledButton} from '@/components/styles';
import {TimeFrame} from '@/constants/common';
import {PageLoader} from '@/components/Loader';
import {MovieCard} from '@/components/Movie/Movie';
import {IMovies} from '@/types/movies';
import {getTrendingMovies} from '@/services/movies';

type Props = {
  timeFrame?: TimeFrame;
};

export const Movies: React.FC<Props> = ({timeFrame}) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<IMovies[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (page: number) => {
    try {
      setIsLoading(true);
      const data = await getTrendingMovies(timeFrame || TimeFrame.DAY, page);
      if (!!movies.length) {
        setMovies((prev) => [...prev, ...data.results]);
      } else {
        setMovies(data.results);
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
        {movies.map((card) => (
          <MovieCard key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <StyledButton type="primary" onClick={handleLoadMore} loading={isLoading}>
        Add more
      </StyledButton>
      <FloatButton.BackTop />
    </>
  );
};
