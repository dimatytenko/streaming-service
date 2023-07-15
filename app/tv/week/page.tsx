import {ItemsWrapper, StyledTitle} from '@/app/styles';
import {Shows} from '@/components/Show/Shows';
import {TimeFrame} from '@/constants/common';

export const metadata = {
  title: 'Streaming service | TV Shows',
  description: 'Your favorite TV Shows in the last week',
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
      <StyledTitle>Most trending tv shows in the last week</StyledTitle>
      <Shows timeFrame={TimeFrame.WEEK} />
    </ItemsWrapper>
  );
}
