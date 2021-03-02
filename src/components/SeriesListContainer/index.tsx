import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchMedia } from '../../hooks';

import { MediaContext } from '../../providers/media/provider';
import { InputBar } from '../InputBar';
import { Pagination } from '../Pagination';
import { SeriesList } from './SeriesList';
import './styles.css';

interface IParam {
  id: string;
}

const SeriesListContainer = () => {
  const { id } = useParams<IParam>();
  useFetchMedia();
  const [page, setPage] = useState(parseInt(id, 10));
  const { media } = useContext(MediaContext);
  const series = media.filter((movie: any) => movie.programType === 'series');

  return (
    <>
      <InputBar />
      <div className="series-list">
        {id === '1' && <SeriesList series={series.slice(0, 21)} />}
        {id === '2' && <SeriesList series={series.slice(21, 43)} />}
        {id === '3' && <SeriesList series={series.slice(43)} />}
      </div>
      <Pagination
        value={page}
        range={Math.floor(series.length / 21)}
        onChange={setPage}
      />
    </>
  );
};

export { SeriesListContainer };
