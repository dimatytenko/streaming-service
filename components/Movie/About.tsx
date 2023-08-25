import {
  StyledTitle,
  StyledText,
  StyledTextItem,
  AboutItemWrapper,
  AboutItemsWrapper,
  StyledLink,
  AboutWrapper,
} from '@/components/styles';
import {IMovies} from '@/types/movies';

type Props = {
  movie: IMovies;
};
export const AboutMovie: React.FC<Props> = ({movie}) => {
  return (
    <AboutWrapper>
      <StyledTitle>About {movie.title}</StyledTitle>
      {!!movie?.budget && (
        <AboutItemWrapper>
          <StyledText>Budget:</StyledText>
          <StyledTextItem>
            $
            {movie.budget
              .toString()
              .split('')
              .reverse()
              .map((w, i) => {
                if (i % 3 === 0) {
                  return w + ',';
                } else {
                  return w;
                }
              })
              .reverse()}
          </StyledTextItem>
        </AboutItemWrapper>
      )}
      {!!movie?.created_by?.length && (
        <AboutItemWrapper>
          <StyledText>Created by:</StyledText>
          <AboutItemsWrapper>
            {movie.created_by.map((item) => (
              <StyledTextItem key={item.id}>{item.name}</StyledTextItem>
            ))}
          </AboutItemsWrapper>
        </AboutItemWrapper>
      )}
      {!!movie?.genres?.length && (
        <AboutItemWrapper>
          <StyledText>Genres:</StyledText>
          <AboutItemsWrapper>
            {movie.genres.map((item) => (
              <StyledTextItem key={item.id}>{item.name}</StyledTextItem>
            ))}
          </AboutItemsWrapper>
        </AboutItemWrapper>
      )}
      {!!movie?.homepage && (
        <AboutItemWrapper>
          <StyledText>Home page:</StyledText>
          <StyledLink href={movie.homepage} target={'_blank'}>
            {movie.title}
          </StyledLink>
        </AboutItemWrapper>
      )}
      {!!movie?.imdb_id && (
        <AboutItemWrapper>
          <StyledText>Imdb page:</StyledText>
          <StyledLink href={`https://www.imdb.com/title/${movie.imdb_id}`} target={'_blank'}>
            {movie.title}
          </StyledLink>
        </AboutItemWrapper>
      )}
      {!!movie?.overview && (
        <AboutItemWrapper>
          <StyledText>Overview:</StyledText>
          <StyledTextItem>{movie.overview}</StyledTextItem>
        </AboutItemWrapper>
      )}
      {!!movie?.production_companies?.length && (
        <AboutItemWrapper>
          <StyledText>Production companies:</StyledText>
          <AboutItemsWrapper>
            {movie.production_companies.map((item) => (
              <StyledTextItem key={item.id}>{item.name}</StyledTextItem>
            ))}
          </AboutItemsWrapper>
        </AboutItemWrapper>
      )}
      {!!movie?.production_countries?.length && (
        <AboutItemWrapper>
          <StyledText>Production countries:</StyledText>
          <AboutItemsWrapper>
            {movie.production_countries.map((item) => (
              <StyledTextItem key={item.name}>{item.name}</StyledTextItem>
            ))}
          </AboutItemsWrapper>
        </AboutItemWrapper>
      )}
      {!!movie?.spoken_languages?.length && (
        <AboutItemWrapper>
          <StyledText>Spoken languages:</StyledText>
          <AboutItemsWrapper>
            {movie.spoken_languages.map((item) => (
              <StyledTextItem key={item.name}>{item.name}</StyledTextItem>
            ))}
          </AboutItemsWrapper>
        </AboutItemWrapper>
      )}
      {!!movie?.status?.length && (
        <AboutItemWrapper>
          <StyledText>Status:</StyledText>
          <StyledTextItem>{movie.status}</StyledTextItem>
        </AboutItemWrapper>
      )}{' '}
      {!!movie?.tagline?.length && (
        <AboutItemWrapper>
          <StyledText>Tagline:</StyledText>
          <StyledTextItem>{movie.tagline}</StyledTextItem>
        </AboutItemWrapper>
      )}
    </AboutWrapper>
  );
};
