import {ItemsWrapper, StyledTitle} from '@/app/styles';
import {Shows} from '@/components/Show/Shows';
import {ShowPaths} from '@/constants/common';

export const metadata = {
  title: 'Streaming service | TV Shows',
  description: 'Your favorite TV Shows that air in the next 7 days',
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
      <StyledTitle>Most trending tv shows that air in the next 7 days</StyledTitle>
      <Shows type={ShowPaths.ON_THE_AIR} />
    </ItemsWrapper>
  );
}
