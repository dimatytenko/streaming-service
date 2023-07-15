import {IShows} from '@/types/shows';
import {
  StyledTitle,
  StyledText,
  StyledTextItem,
  AboutItemWrapper,
  AboutItemsWrapper,
  StyledLink,
  AboutWrapper,
} from '@/components/Show/styles';

type Props = {
  show: IShows;
};
export const AboutShow: React.FC<Props> = ({show}) => {
  return (
    <AboutWrapper>
      <StyledTitle>About Show</StyledTitle>
      {!!show?.created_by?.length && (
        <AboutItemWrapper>
          <StyledText>Created by:</StyledText>
          <AboutItemsWrapper>
            {show.created_by.map((item) => (
              <StyledTextItem key={item.id}>{item.name}</StyledTextItem>
            ))}
          </AboutItemsWrapper>
        </AboutItemWrapper>
      )}
      {!!show?.genres?.length && (
        <AboutItemWrapper>
          <StyledText>Genres:</StyledText>
          <AboutItemsWrapper>
            {show.genres.map((item) => (
              <StyledTextItem key={item.id}>{item.name}</StyledTextItem>
            ))}
          </AboutItemsWrapper>
        </AboutItemWrapper>
      )}
      {!!show?.homepage && (
        <AboutItemWrapper>
          <StyledText>Home page:</StyledText>
          <StyledLink href={show.homepage} target={'_blank'}>
            {show.name}
          </StyledLink>
        </AboutItemWrapper>
      )}
      {!!show?.first_air_date && (
        <AboutItemWrapper>
          <StyledText>First air date:</StyledText>
          <StyledTextItem>{show.first_air_date}</StyledTextItem>
        </AboutItemWrapper>
      )}
      {!!show?.last_air_date && (
        <AboutItemWrapper>
          <StyledText>Last air date:</StyledText>
          <StyledTextItem>{show.last_air_date}</StyledTextItem>
        </AboutItemWrapper>
      )}
      {!!show?.number_of_episodes && (
        <AboutItemWrapper>
          <StyledText>Number of episodes:</StyledText>
          <StyledTextItem>{show.number_of_episodes}</StyledTextItem>
        </AboutItemWrapper>
      )}
      {!!show?.number_of_seasons && (
        <AboutItemWrapper>
          <StyledText>Number of seasons:</StyledText>
          <StyledTextItem>{show.number_of_seasons}</StyledTextItem>
        </AboutItemWrapper>
      )}
      {!!show?.overview && (
        <AboutItemWrapper>
          <StyledText>Overview:</StyledText>
          <StyledTextItem>{show.overview}</StyledTextItem>
        </AboutItemWrapper>
      )}
      {!!show?.production_companies?.length && (
        <AboutItemWrapper>
          <StyledText>Production companies:</StyledText>
          <AboutItemsWrapper>
            {show.production_companies.map((item) => (
              <StyledTextItem key={item.id}>{item.name}</StyledTextItem>
            ))}
          </AboutItemsWrapper>
        </AboutItemWrapper>
      )}
      {!!show?.production_countries?.length && (
        <AboutItemWrapper>
          <StyledText>Production countries:</StyledText>
          <AboutItemsWrapper>
            {show.production_countries.map((item) => (
              <StyledTextItem key={item.name}>{item.name}</StyledTextItem>
            ))}
          </AboutItemsWrapper>
        </AboutItemWrapper>
      )}
      {!!show?.spoken_languages?.length && (
        <AboutItemWrapper>
          <StyledText>Spoken languages:</StyledText>
          <AboutItemsWrapper></AboutItemsWrapper>
          {show.spoken_languages.map((item) => (
            <StyledTextItem key={item.name}>{item.name}</StyledTextItem>
          ))}
        </AboutItemWrapper>
      )}
      {!!show?.status?.length && (
        <AboutItemWrapper>
          <StyledText>Status:</StyledText>
          <StyledTextItem>{show.status}</StyledTextItem>
        </AboutItemWrapper>
      )}{' '}
      {!!show?.tagline?.length && (
        <AboutItemWrapper>
          <StyledText>Tagline:</StyledText>
          <StyledTextItem>{show.tagline}</StyledTextItem>
        </AboutItemWrapper>
      )}{' '}
      {!!show?.type?.length && (
        <AboutItemWrapper>
          <StyledText>Type:</StyledText>
          <StyledTextItem>{show.type}</StyledTextItem>
        </AboutItemWrapper>
      )}
    </AboutWrapper>
  );
};
