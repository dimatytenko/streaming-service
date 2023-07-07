import {CardWithTabs} from '@/components/Card/CardWithTabs';
import {API_KEY, API_URL} from '@/constants/api';
import {TimeFrame} from '@/constants/common';
import {HomeWrapper} from './styles';

const getData = async (timeFrame: string) => {
  const res = await fetch(`${API_URL}/trending/movie/${timeFrame}?api_key=${API_KEY}`);
  return res.json();
};

export default async function Home() {
  const dayData = await getData(TimeFrame.DAY);
  const weekData = await getData(TimeFrame.WEEK);

  return (
    <HomeWrapper>
      <CardWithTabs title="Most trending movies" dayData={dayData.results} weekData={weekData.results} />
    </HomeWrapper>
  );
}
