import {TimeFrame} from '@/constants/common';
import {ItemsWrapper, StyledTitle} from '@/app/styles';
import {Actors} from '@/components/Actors/Actors';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors in the last week',
};

export default function ActorsWeek() {
  return (
    <ItemsWrapper>
      <StyledTitle>Most trending actors in the last week</StyledTitle>
      <Actors timeFrame={TimeFrame.WEEK} />
    </ItemsWrapper>
  );
}
