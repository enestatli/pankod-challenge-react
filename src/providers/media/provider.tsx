import { createContext, useReducer } from 'react';

import { MEDIA_INITIAL_STATE } from './reducer';
import { IContext, IMedia } from '../../interfaces';
import mediaReducer from './reducer';
import { actionConsts } from '../../definitions';

export const MediaContext = createContext<IContext>({
  ...MEDIA_INITIAL_STATE,
  setMedia: () => {},
  searchMedia: () => {},
  filterByDateAndTitle: () => {},
  loadMedia: () => {},
});

export const MediaProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(mediaReducer, MEDIA_INITIAL_STATE);
  const { media, search_media, search_by_release, loading } = state;

  const setMedia = (media: IMedia[]) => {
    dispatch({
      type: actionConsts.MEDIA.SET,
      payload: media,
    });
  };

  const searchMedia = (media: IMedia[], query: string) => {
    dispatch({
      type: actionConsts.MEDIA.SEARCH,

      payload: { media, query },
    });
  };

  const filterByDateAndTitle = (media: IMedia[], query: string | number) => {
    dispatch({
      type: actionConsts.MEDIA.FILTER,

      payload: { media, query },
    });
  };

  const loadMedia = () => {
    dispatch({
      type: actionConsts.MEDIA.LOADING,
    });
  };

  return (
    <MediaContext.Provider
      value={{
        setMedia,
        filterByDateAndTitle,
        searchMedia,
        loadMedia,
        loading,
        media,
        search_media,
        search_by_release,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
