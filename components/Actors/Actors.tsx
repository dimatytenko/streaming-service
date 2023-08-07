'use client';
import {useState, useEffect} from 'react';
import {FloatButton} from 'antd';

import {CardsWrapper, StyledButton} from '@/components/styles';
import {ActorsCardContent} from '@/components/Actors/Actor';
import {ITrendingActors} from '@/types/actors';
import {getActors} from '@/services/actors';
import {TimeFrame} from '@/constants/common';
import {PageLoader} from '@/components/Loader';

type Props = {
  timeFrame: TimeFrame;
};

export const Actors: React.FC<Props> = ({timeFrame}) => {
  const [page, setPage] = useState(1);
  const [actors, setActors] = useState<ITrendingActors[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (page: number) => {
    try {
      setIsLoading(true);
      const data = await getActors(timeFrame, page);
      if (!!actors.length) {
        setActors((prev) => [...prev, ...data.results]);
      } else {
        setActors(data.results);
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
        {actors.map((card) => (
          <ActorsCardContent key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <StyledButton type="primary" onClick={handleLoadMore} loading={isLoading}>
        Add more
      </StyledButton>
      <FloatButton.BackTop />
    </>
  );
};
