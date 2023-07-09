import {ActorsWrapper} from '../styles';
import {Actors} from '@/components/Actors';
import {TimeFrame} from '@/constants/common';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors in the last 24 hours',
};

export default function ActorsToday() {
  return (
    <ActorsWrapper>
      <Actors timeFrame={TimeFrame.DAY} />
    </ActorsWrapper>
  );
}
