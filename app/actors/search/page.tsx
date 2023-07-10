import {ActorsWrapper, StyledTitle} from '../styles';
import {SearchActors} from '@/components/Actors/SearchActors';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors in the last 24 hours',
};

type Props = {
  searchParams: {
    query: string;
    page: number;
  };
};

export default function ActorsToday({searchParams: {query, page}}: Props) {
  return (
    <ActorsWrapper>
      <StyledTitle>Results of search</StyledTitle>
      <SearchActors query={query} page={page || 1} />
    </ActorsWrapper>
  );
}
