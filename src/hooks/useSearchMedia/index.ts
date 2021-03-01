import { useContext, useEffect, useState } from 'react';

import { MediaContext } from '../../providers/media/provider';
import { callFetch } from '../../utils';

const useSearchMedia = () => {
  const { searchMedia } = useContext(MediaContext);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query.length) {
      callFetch((data) => searchMedia(data, query));
    }
  }, [query]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (query.length !== 0) {
      callFetch((data) => searchMedia(data, query));
    }
  };

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  return { handleSubmit, handleChange };
};

export { useSearchMedia };
