import {ItemsWrapper, StyledTitle} from '@/app/styles';
import {Actors} from '@/components/Actors/Actors';
import {TimeFrame} from '@/constants/common';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors in the last 24 hours',
};

export default function ActorsToday() {
  return (
    <ItemsWrapper>
      <StyledTitle>Most trending actors in the last 24 hours</StyledTitle>
      <Actors timeFrame={TimeFrame.DAY} />
    </ItemsWrapper>
  );
}
