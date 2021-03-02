import { IMedia } from '../interfaces';
import { apiService } from '../services';

//TODO: make it hook
const callFetch = async (
  callback: (data: IMedia[] | undefined | any) => {}
) => {
  const res = await apiService.fetchData();
  if (!res || !res.entries || !res.total) {
    return;
  }
  callback(res.entries);
  return;
};

export { callFetch };
