import { useContext } from 'react';
import { IMedia } from '../../../interfaces';
import { MediaContext } from '../../../providers/media/provider';
import { Card } from '../../Card';
import { ErrorC } from '../../ErrorC';
import { Loading } from '../../Loading';

interface IProps {
  movies: IMedia[];
}

const MovieList = ({ movies }: IProps): any => {
  const { loading } = useContext(MediaContext);

  if (loading) {
    return <Loading />;
  }

  if (movies.length) {
    return movies.map((movie: IMedia, i: number) => (
      <Card
        key={i.toString()}
        title={movie.title}
        imgUrl={movie.images['Poster Art'].url}
      />
    ));
  }

  if (!movies.length) {
    return <h1>No search result found...</h1>;
  }

  return <ErrorC />;
};

export { MovieList };
