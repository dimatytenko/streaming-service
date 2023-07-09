import {Card} from '@/components/Card/Card';
import {CardWithTabs} from '@/components/Card/CardWithTabs';
import {API_KEY, API_URL} from '@/constants/api';
import {TimeFrame} from '@/constants/common';
import {toCardStateMovies, toCardStateTrendingShows} from '@/helpers/data';
import {CardWrapper, HomeWrapper} from './styles';

const getTrendingMovies = async (timeFrame: string) => {
  const res = await fetch(`${API_URL}/trending/movie/${timeFrame}?api_key=${API_KEY}`);
  return res.json();
};

const getTrendingShows = async (timeFrame: string) => {
  const res = await fetch(`${API_URL}/trending/tv/${timeFrame}?api_key=${API_KEY}`);
  return res.json();
};

const getUpcomingMovies = async () => {
  const res = await fetch(`${API_URL}/movie/upcoming/?api_key=${API_KEY}`);
  return res.json();
};

export default async function Home() {
  const dayTrendingMovies = await getTrendingMovies(TimeFrame.DAY);
  const weekTrendingMovies = await getTrendingMovies(TimeFrame.WEEK);
  const dayTrendingShows = await getTrendingShows(TimeFrame.DAY);
  const weekTrendingShows = await getTrendingShows(TimeFrame.WEEK);
  const upcomingMovies = await getUpcomingMovies();
  const upcomingMoviesData = toCardStateMovies(upcomingMovies.results);
  const dayMoviesData = toCardStateMovies(dayTrendingMovies.results);
  const weekMoviesData = toCardStateMovies(weekTrendingMovies.results);
  const dayShowsData = toCardStateTrendingShows(dayTrendingShows.results);
  const weekShowsData = toCardStateTrendingShows(weekTrendingShows.results);

  return (
    <HomeWrapper>
      <CardWrapper>
        <CardWithTabs title="Most trending movies" dayData={dayMoviesData} weekData={weekMoviesData} />
      </CardWrapper>
      <CardWrapper>
        <Card title="Upcoming soon" data={upcomingMoviesData} />
      </CardWrapper>
      <CardWrapper>
        <CardWithTabs title="Most trending TV Shows" dayData={dayShowsData} weekData={weekShowsData} />
      </CardWrapper>
    </HomeWrapper>
  );
}
