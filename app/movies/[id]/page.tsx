import {ItemsWrapper} from '@/app/styles';
import {ShowCard} from '@/components/Show/Show';
import {MovieWrapper} from '@/app/movies/styles';
import {getMovieDetails} from '@/services/movies';
import {MovieCard} from '@/components/Movie/Movie';
import {AboutMovie} from '@/components/Movie/About';

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({params: {id}}: Props) => {
  return {
    title: `Streaming service | Movie details ${id}`,
  };
};

export default async function Show({params: {id}}: Props) {
  const movie = await getMovieDetails(id);

  return (
    <ItemsWrapper>
      <MovieWrapper>
        <MovieCard card={movie} />
        <AboutMovie movie={movie} />
      </MovieWrapper>
    </ItemsWrapper>
  );
}
