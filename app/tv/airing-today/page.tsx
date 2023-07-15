import {ItemsWrapper, StyledTitle} from '@/app/styles';
import {Shows} from '@/components/Show/Shows';
import {ShowPaths} from '@/constants/common';

export const metadata = {
  title: 'Streaming service | TV Shows',
  description: 'Your favorite TV Shows airing today',
};

type Props = {
  searchParams: {
    page: number;
  };
};

export default async function TvShowsPopular({searchParams: {page}}: Props) {
  console.log('TvShowsPopular', page);
  return (
    <ItemsWrapper>
      <StyledTitle>Most trending tv shows airing today</StyledTitle>
      <Shows type={ShowPaths.AIRING_TODAY} />
    </ItemsWrapper>
  );
}
