import {ItemsWrapper, PaginationWrapper, StyledTitle} from '@/app/styles';
import {IShows} from '@/types/shows';
import {Pagination} from '@/components/Pagination';
import {getPopularShows} from '@/services/shows';
import {CardsWrapper} from '@/components/styles';
import {ShowCard} from '@/components/Show/Show';
export const metadata = {
  title: 'Streaming service | TV Shows',
  description: 'Your favorite TV Shows and more',
};

type Props = {
  searchParams: {
    page: number;
  };
};

export default async function TvShowsPopular({searchParams: {page}}: Props) {
  const data = await getPopularShows(page || 1);

  return (
    <ItemsWrapper>
      <StyledTitle>Most popular tv shows</StyledTitle>
      <CardsWrapper>
        {data?.results.map((card: IShows) => (
          <ShowCard key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <PaginationWrapper>
        <Pagination data={data} />
      </PaginationWrapper>
    </ItemsWrapper>
  );
}
