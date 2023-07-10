import {Card} from '@/components/Card/Card';
import {CardWithTabs} from '@/components/Card/CardWithTabs';
import {TimeFrame} from '@/constants/common';
import {toCardStateMovies, toCardStateShows} from '@/helpers/data';
import {getTrendingMovies, getUpcomingMovies} from '@/services/movies';
import {getAiringTodayShows, getTrendingShows} from '@/services/shows';
import {CardWrapper, HomeWrapper} from './styles';

export default async function Home() {
  const dayTrendingMovies = await getTrendingMovies(TimeFrame.DAY);
  const weekTrendingMovies = await getTrendingMovies(TimeFrame.WEEK);
  const dayTrendingShows = await getTrendingShows(TimeFrame.DAY);
  const weekTrendingShows = await getTrendingShows(TimeFrame.WEEK);
  const upcomingMovies = await getUpcomingMovies();
  const airingTodayShows = await getAiringTodayShows();
  const upcomingMoviesData = toCardStateMovies(upcomingMovies.results);
  const airingTodayShowsData = toCardStateShows(airingTodayShows.results);
  const dayMoviesData = toCardStateMovies(dayTrendingMovies.results);
  const weekMoviesData = toCardStateMovies(weekTrendingMovies.results);
  const dayShowsData = toCardStateShows(dayTrendingShows.results);
  const weekShowsData = toCardStateShows(weekTrendingShows.results);

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
      <CardWrapper>
        <Card title="TV Shows airing today" data={airingTodayShowsData} />
      </CardWrapper>
    </HomeWrapper>
  );
}
