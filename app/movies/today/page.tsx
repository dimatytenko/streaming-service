import {ItemsWrapper, StyledTitle} from '@/app/styles';
import {TimeFrame} from '@/constants/common';
import {Movies} from '@/components/Movie/Movies';

export const metadata = {
  title: 'Streaming service | Movies',
  description: 'Your favorite Movies in the last 24 hours',
};

type Props = {
  searchParams: {
    page: number;
  };
};

export default async function MoviesPopular({searchParams: {page}}: Props) {
  return (
    <ItemsWrapper>
      <StyledTitle>Most trending movies in the last 24 hours</StyledTitle>
      <Movies timeFrame={TimeFrame.DAY} />
    </ItemsWrapper>
  );
}
