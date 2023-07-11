import {getActorById, getActorMovies, getActorTvShows, getActorImages} from '@/services/actors';
import {ActorsCardContent} from '@/components/Actors/Actor';
import {ActorsWrapper} from '../styles';
import {ActorTabs} from '@/components/Card/ActorTabs';

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({params: {id}}: Props) => {
  return {
    title: `Streaming service | Actor details ${id}`,
  };
};

export default async function Movie({params: {id}}: Props) {
  const actor = await getActorById(id);
  const movies = await getActorMovies(id);
  const tvShows = await getActorTvShows(id);
  const images = await getActorImages(id);

  return (
    <ActorsWrapper>
      <ActorsCardContent card={actor} />
      <ActorTabs title={'Info'} movies={movies} shows={tvShows} images={images} />
    </ActorsWrapper>
  );
}
