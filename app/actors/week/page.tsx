import {API_KEY, API_URL} from '@/constants/api';
import {TimeFrame} from '@/constants/common';
import {ActorsWrapper, CardsWrapper, PaginationWrapper} from '../styles';
import {ActorsCardContent} from '@/components/Card/Actor';
import {ITrendingActors} from '@/types/data';
import {Pagination} from '@/components/Pagination';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors in the last week',
};

const getData = async (timeFrame: string, page: number) => {
  const res = await fetch(`${API_URL}/trending/person/${timeFrame}?page=${page}&api_key=${API_KEY}`);
  return res.json();
};

type Props = {
  searchParams: {
    page: number;
  };
};

export default async function ActorsWeek({searchParams: {page}}: Props) {
  const data = await getData(TimeFrame.WEEK, page || 1);

  return (
    <ActorsWrapper>
      <CardsWrapper>
        {data.results.map((card: ITrendingActors) => (
          <ActorsCardContent key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <PaginationWrapper>
        <Pagination data={data} />
      </PaginationWrapper>
    </ActorsWrapper>
  );
}
