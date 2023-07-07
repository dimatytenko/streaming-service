import {API_KEY, API_URL} from '@/constants/api';
import {TimeFrame} from '@/constants/common';
import {ActorsWrapper, CardsWrapper} from '../styles';
import {ActorsCardContent} from '@/components/Card/Actor';
import {ITrendingActors} from '@/types/data';

export const metadata = {
  title: 'Streaming service | Actors',
  description: 'Popular modern actors in the last 24 hours',
};

const getData = async (timeFrame: string, page = 1) => {
  const res = await fetch(`${API_URL}/trending/person/${timeFrame}?page=${page}&api_key=${API_KEY}`);
  return res.json();
};

export default async function ActorsToday() {
  const data = await getData(TimeFrame.DAY);
  console.log(data.results);

  return (
    <ActorsWrapper>
      <CardsWrapper>
        {data.results.map((card: ITrendingActors) => (
          <ActorsCardContent key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <button>add more</button>
    </ActorsWrapper>
  );
}
