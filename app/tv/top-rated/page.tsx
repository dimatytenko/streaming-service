import {ItemsWrapper, StyledTitle} from '@/app/styles';
import {Shows} from '@/components/Show/Shows';
import {ShowPaths} from '@/constants/common';

export const metadata = {
  title: 'Streaming service | TV Shows',
  description: 'Your favorite TV Shows ordered by rating',
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
      <StyledTitle>Most trending tv shows ordered by rating</StyledTitle>
      <Shows type={ShowPaths.TOP_RATED} />
    </ItemsWrapper>
  );
}
