'use client';
import {useState, useEffect} from 'react';

import {getBySearch} from '@/services/actors';
import {ActorsCardContent} from '@/components/Actors/Actor';
import {CardsWrapper, NothingWrapper, StyledTitle} from './styles';
import {ITrendingActorsData} from '@/types/actors';
import {Pagination} from '@/components/Pagination';
import {PaginationWrapper} from '@/app/actors/styles';
import {PageLoader} from '@/components/Loader';

type Props = {
  query: string;
  page: number;
};

export const SearchActors: React.FC<Props> = ({query, page}) => {
  const [data, setData] = useState<ITrendingActorsData>();

  useEffect(() => {
    const getData = async (query: string, page: number) => {
      try {
        const data = await getBySearch(query, page);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };

    getData(query, page);
  }, [query, page]);

  if (!data) {
    return <PageLoader />;
  }
  if (!data.results.length) {
    return (
      <NothingWrapper>
        <StyledTitle>Nothing found</StyledTitle>
      </NothingWrapper>
    );
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
