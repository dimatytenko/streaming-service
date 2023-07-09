import {TimeFrame} from '@/constants/common';
import {ActorsWrapper} from '../styles';
import {Actors} from '@/components/Actors';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors in the last week',
};

export default function ActorsWeek() {
  return (
    <ActorsWrapper>
      <Actors timeFrame={TimeFrame.WEEK} />
    </ActorsWrapper>
  );
}
