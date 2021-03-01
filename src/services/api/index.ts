import { IMedia } from '../../interfaces';

//TODO:
// interface IFetchDataReturn {
//   entries: IMedia[];
//   total: number;
// }

const apiService = {
  fetchData: async (): Promise<any> => {
    let data: any = {};
    try {
      const res = await fetch('http://localhost:3000/data.json');
      data = await res.json();
    } catch (error) {
      console.log('Error happens while fetching data in fetchData', error);
    }
    return data;
  },
};

export { apiService };
