import {API_KEY, API_URL} from '@/constants/api';
import {ActorsWrapper, CardsWrapper, PaginationWrapper} from '../styles';
import {ActorsCardContent} from '@/components/Card/Actor';
import {ITrendingActors} from '@/types/data';
import {Pagination} from '@/components/Pagination';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors',
};

const getData = async (page: number) => {
  const res = await fetch(`${API_URL}/person/popular?page=${page}&api_key=${API_KEY}`);
  return res.json();
};

type Props = {
  searchParams: {
    page: number;
  };
};

export default async function ActorsAll({searchParams: {page}}: Props) {
  const data = await getData(page || 1);

  return (
    <ActorsWrapper>
      <CardsWrapper>
        {data?.results?.map((card: ITrendingActors) => (
          <ActorsCardContent key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <PaginationWrapper>
        <Pagination data={data} />
      </PaginationWrapper>
    </ActorsWrapper>
  );
}
