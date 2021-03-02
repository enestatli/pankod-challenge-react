import { IMedia } from '..';

interface IMediaInit {
  media: IMedia[];
  search_media: IMedia[];
  search_by_release: IMedia[];
  loading: boolean;
}

export { IMediaInit };
