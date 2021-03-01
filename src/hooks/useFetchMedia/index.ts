import { useContext, useEffect } from 'react';

import { MediaContext } from '../../providers/media/provider';
import { callFetch } from '../../utils';

const useFetchMedia = () => {
  const { setMedia } = useContext(MediaContext);

  useEffect(() => {
    callFetch((data) => setMedia(data));
  }, []);
};

export { useFetchMedia };
