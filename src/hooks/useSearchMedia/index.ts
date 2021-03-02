import { useContext, useEffect, useState } from 'react';

import { MediaContext } from '../../providers/media/provider';
import { callFetch } from '../../utils';

const useSearchMedia = () => {
  const { searchMedia, loadMedia } = useContext(MediaContext);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query.length) {
      loadMedia();
      callFetch((data) => searchMedia(data, query));
    }
  }, [query]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!query.length) {
      return;
    }

    if (query.length >= 3) {
      loadMedia();
      callFetch((data) => searchMedia(data, query));
    }
  };

  const handleChange = (e: any) => {
    if (!e || e.target || e.target.value) {
      setQuery(e.target.value);
    }
  };

  return { handleSubmit, handleChange };
};

export { useSearchMedia };
