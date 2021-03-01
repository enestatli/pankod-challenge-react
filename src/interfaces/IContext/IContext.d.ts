import { IMedia } from '..';
import { IMediaInit } from '..';

interface IContext extends IMediaInit {
  setMedia: (media: IMedia[]) => any;
  searchMedia: (media: IMedia[], query: string) => any;
  filterByDateAndTitle: (media: IMedia[], query: string | number) => any;
}

export { IContext };
