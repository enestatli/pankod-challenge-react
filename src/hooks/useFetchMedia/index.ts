import { useContext, useEffect } from 'react';

import { apiService } from '../../services';
import { MediaContext } from '../../providers/media/provider';
import { callFetch } from '../../utils';

const useFetchMedia = () => {
  const { setMedia } = useContext(MediaContext);

  useEffect(() => {
    (async function () {
      const res = await apiService.fetchData();
      if (!res) {
        return;
      }
      setMedia(res.entries);
      //TODO:
      // callFetch((data) => setMedia(data, query));
    })();
  }, []);
};

export { useFetchMedia };
