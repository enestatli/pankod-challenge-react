import { IMedia } from '../interfaces';
import { apiService } from '../services';

const callFetch = async (callback: (data: IMedia[]) => {}) => {
  const res = await apiService.fetchData();
  if (!res || !res.entries || !res.total) {
    return;
  }

  callback(res.entries);
};

export { callFetch };
