import { useContext, useEffect, useState } from 'react';

import { MediaContext } from '../../providers/media/provider';
import { callFetch } from '../../utils';

const useFilter = () => {
  const { filterByDateAndTitle, loadMedia } = useContext(MediaContext);
  const [query, setQuery] = useState('');

  useEffect(() => {
    loadMedia();
    if (query.length) {
      callFetch((data) => filterByDateAndTitle(data, query));
    } else {
      callFetch((data) => filterByDateAndTitle(data, query));
    }
  }, [query]);

  const handleChange = (e: any) => {
    if (!e || e.target || e.target.value) {
      return;
    }
    const value = e.target.value;
    loadMedia();
    switch (value) {
      case 'desc_year':
        return setQuery(value);
      case 'asc_year':
        return setQuery(value);
      case 'desc_title':
        return setQuery(value);
      case 'asc_title':
        return setQuery(value);
      default:
        return setQuery('');
    }
  };

  return { handleChange };
};

export { useFilter };
