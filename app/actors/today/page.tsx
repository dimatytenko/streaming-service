import {ActorsWrapper, StyledTitle} from '../styles';
import {Actors} from '@/components/Actors/Actors';
import {TimeFrame} from '@/constants/common';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors in the last 24 hours',
};

export default function ActorsToday() {
  return (
    <ActorsWrapper>
      <StyledTitle>Most trending actors in the last 24 hours</StyledTitle>
      <Actors timeFrame={TimeFrame.DAY} />
    </ActorsWrapper>
  );
}
