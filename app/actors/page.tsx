import {ActorsWrapper, CardsWrapper, PaginationWrapper} from './styles';
import {ActorsCardContent} from '@/components/Card/Actor';
import {ITrendingActors} from '@/types/actors';
import {Pagination} from '@/components/Pagination';
import {getAllActors} from '@/services/actors';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors',
};

type Props = {
  searchParams: {
    page: number;
  };
};

export default async function ActorsAll({searchParams: {page}}: Props) {
  const data = await getAllActors(page || 1);

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
