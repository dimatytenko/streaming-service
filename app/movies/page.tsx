import {ItemsWrapper, PaginationWrapper, StyledTitle} from '@/app/styles';
import {Pagination} from '@/components/Pagination';
import {getPopularMovies} from '@/services/movies';
import {CardsWrapper} from '@/components/styles';
import {IMovies} from '@/types/movies';
import {MovieCard} from '@/components/Movie/Movie';

export const metadata = {
  title: 'Streaming service | Movies',
  description: 'All the movies that you can find on web',
};

type Props = {
  searchParams: {
    page: number;
  };
};

export default async function MoviesPopular({searchParams: {page}}: Props) {
  const data = await getPopularMovies(page || 1);

  return (
    <ItemsWrapper>
      <StyledTitle>Most popular movies</StyledTitle>
      <CardsWrapper>
        {data?.results.map((card: IMovies) => (
          <MovieCard key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <PaginationWrapper>
        <Pagination data={data} />
      </PaginationWrapper>
    </ItemsWrapper>
  );
}
