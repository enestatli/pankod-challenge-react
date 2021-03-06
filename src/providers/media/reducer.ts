import { IMediaInit } from '../../interfaces';
import { actionConsts } from '../../definitions';
import {
  filterSearchResults,
  filterSearchResultsByDateAndTitle,
} from './utils';

export const MEDIA_INITIAL_STATE: IMediaInit = {
  media: [],
  search_media: [],
  search_by_release: [],
  loading: true,
};

const mediaReducer = (state: IMediaInit, action: any): IMediaInit => {
  switch (action.type) {
    case actionConsts.MEDIA.SET:
      return {
        ...state,
        media: action.payload,
        loading: false,
      };
    case actionConsts.MEDIA.SEARCH:
      return {
        ...state,
        media: filterSearchResults(action.payload.query, action.payload.media),
        loading: false,
      };
    case actionConsts.MEDIA.FILTER:
      return {
        ...state,
        media: filterSearchResultsByDateAndTitle(
          action.payload.query,
          action.payload.media
        ),
        loading: false,
      };
    case actionConsts.MEDIA.LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default mediaReducer;
