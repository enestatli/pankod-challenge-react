import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchMedia } from '../../hooks';

import { MediaContext } from '../../providers/media/provider';
import { InputBar } from '../InputBar';
import { Pagination } from '../Pagination';
import { MovieList } from './MovieList';
import './styles.css';

interface IParam {
  id: string;
}

const MovieListContainer = () => {
  useFetchMedia();
  const { id } = useParams<IParam>();
  const { media } = useContext(MediaContext);
  const [page, setPage] = useState(parseInt(id, 10));
  const movies = media.filter((movie: any) => movie.programType === 'movie');

  return (
    <>
      <InputBar />
      <div className="movie-list">
        {id === '1' && <MovieList movies={movies.slice(0, 21)} />}
        {id === '2' && <MovieList movies={movies.slice(21)} />}
      </div>
      <Pagination
        value={page}
        range={Math.ceil(movies.length / 21)}
        onChange={setPage}
        mediaType="movie"
      />
    </>
  );
};

export { MovieListContainer };
