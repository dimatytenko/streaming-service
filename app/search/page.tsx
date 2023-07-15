import {GlobalSearchContent} from '@/components/Search/GlobalSearchContent';
import {GlobalSearchNav} from '@/components/Search/GlobalSearchNav';
import {SearchPageWrapper} from '@/app/styles';

export const metadata = {
  title: 'Streaming service | Search',
  description: 'Search for all the media that you can find on web',
};

type Props = {
  searchParams: {
    query: string;
    page: number;
  };
};

export default function Search({searchParams: {query, page}}: Props) {
  return (
    <SearchPageWrapper>
      <GlobalSearchNav />
      <GlobalSearchContent query={query} page={page || 1} />
    </SearchPageWrapper>
  );
}
