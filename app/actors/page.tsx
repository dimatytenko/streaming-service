import {ItemsWrapper, PaginationWrapper, StyledTitle} from '@/app/styles';
import {ActorsCardContent} from '@/components/Actors/Actor';
import {ITrendingActors} from '@/types/actors';
import {Pagination} from '@/components/Pagination';
import {getAllActors} from '@/services/actors';
import {CardsWrapper} from '@/components/Actors/styles';

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
    <ItemsWrapper>
      <StyledTitle>Most trending actors</StyledTitle>
      <CardsWrapper>
        {data?.results?.map((card: ITrendingActors) => (
          <ActorsCardContent key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <PaginationWrapper>
        <Pagination data={data} />
      </PaginationWrapper>
    </ItemsWrapper>
  );
}
