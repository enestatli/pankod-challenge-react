import { useContext, useEffect, useState } from 'react';

import { MediaContext } from '../../providers/media/provider';
import { callFetch } from '../../utils';

const useFilter = () => {
  const [query, setQuery] = useState('');
  const { filterByDateAndTitle } = useContext(MediaContext);

  useEffect(() => {
    if (query.length) {
      callFetch((data) => filterByDateAndTitle(data, query));
    } else {
      callFetch((data) => filterByDateAndTitle(data, query));
    }
  }, [query]);

  const handleChange = (e: any) => {
    const value = e.target.value;

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
