'use client';
import {useState, useEffect} from 'react';

import {getBySearch} from '@/services/actors';
import {ActorsCardContent} from '@/components/Actors/Actor';
import {CardsWrapper} from '@/components/styles';
import {ITrendingActorsData} from '@/types/actors';
import {Pagination} from '@/components/Pagination';
import {PaginationWrapper} from '@/app/styles';
import {PageLoader} from '@/components/Loader';
import {NothingFound} from '../404/NothingFound';

type Props = {
  query: string;
  page: number;
};

export const SearchActors: React.FC<Props> = ({query, page}) => {
  const [data, setData] = useState<ITrendingActorsData>();
  const getData = async (query: string, page: number) => {
    try {
      const data = await getBySearch(query, page);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData(query, page);
  }, [query, page]);

  if (!data) {
    return <PageLoader />;
  }
  if (!data.results.length) {
    return <NothingFound />;
  }

  return (
    <>
      <CardsWrapper>
        {data?.results.map((card) => (
          <ActorsCardContent key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <PaginationWrapper>
        <Pagination data={data} query={query} />
      </PaginationWrapper>
    </>
  );
};
