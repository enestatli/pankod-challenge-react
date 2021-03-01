import { IMedia } from '../../interfaces';

const filterSearchResults = (query: string, arr: IMedia[]) => {
  return arr.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
};

const filterSearchResultsByDateAndTitle = (
  query: number | string,
  arr: IMedia[]
) => {
  switch (query) {
    case 'asc_year':
      return arr.sort((a, b) => a.releaseYear - b.releaseYear);
    case 'desc_year':
      return arr.sort((a, b) => b.releaseYear - a.releaseYear);
    case 'asc_title':
      return arr.sort((a, b) =>
        a.title < b.title ? -1 : a.title < b.title ? 1 : 0
      );
    case 'desc_title':
      return arr.sort((a, b) =>
        a.title > b.title ? -1 : a.title > b.title ? 1 : 0
      );

    default:
      return arr;
  }
};

export { filterSearchResults, filterSearchResultsByDateAndTitle };
