import {GlobalSearchContent} from '@/components/Search/GlobalSearchContent';
import {GlobalSearchNav} from '@/components/Search/GlobalSearchNav';
import {SearchPageWrapper} from '../actors/styles';

export const metadata = {
  title: 'Streaming service | Search',
  description: 'Search for all the media that you can find on web',
};

type Props = {
  searchParams: {
    query: string;
  };
};

export default function Search({searchParams: {query}}: Props) {
  return (
    <SearchPageWrapper>
      <GlobalSearchNav />
      <GlobalSearchContent query={query} />
    </SearchPageWrapper>
  );
}
