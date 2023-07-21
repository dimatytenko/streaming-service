import {GlobalSearchContent} from '@/components/Search/GlobalSearchContent';
import {SearchPageWrapper} from '@/app/styles';
import {SearchFilters} from '@/constants/common';

export const metadata = {
  title: 'Streaming service | Search',
  description: 'Search for all the media that you can find on web',
};

type Props = {
  searchParams: {
    query: string;
    page: number;
    filter: SearchFilters;
  };
};

export default function Search({searchParams: {query, page, filter}}: Props) {
  return (
    <SearchPageWrapper>
      <GlobalSearchContent query={query} page={page || 1} filter={filter} />
    </SearchPageWrapper>
  );
}
