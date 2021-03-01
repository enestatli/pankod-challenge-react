import { useContext } from 'react';

import { useFetchMedia } from '../../hooks';
import { IMedia } from '../../interfaces';
import { MediaContext } from '../../providers/media/provider';
import { Card } from '../Card';
import { ErrorC } from '../ErrorC';

const SeriesList = (): any => {
  useFetchMedia();
  const { media } = useContext(MediaContext);
  const series = media.filter((movie: any) => movie.programType === 'series');

  if (series.length) {
    return series.map((movie: IMedia, i: number) => (
      <Card
        key={i.toString()}
        title={movie.title}
        imgUrl={movie.images['Poster Art'].url}
      />
    ));
  }

  if (!series.length) {
    return <h1>No search result found...</h1>;
  }

  return <ErrorC />;
};

export { SeriesList };
