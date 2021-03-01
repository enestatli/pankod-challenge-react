import React from 'react';
import { MovieListContainer } from '../../components';

import './styles.css';

const Movies = () => {
  return (
    <section className="movies limit-width">
      {/* <SearchBar /> */}
      {/* <Filter /> */}
      {/* @ts-ignore */}
      {/* <MovieList /> */}
      <MovieListContainer />
    </section>
  );
};

export default Movies;
