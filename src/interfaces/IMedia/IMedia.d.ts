import { IImages } from '../IImages/IImages';

export interface IMedia {
  title: string;
  description: string;
  programType: string;
  images: IImages;
  releaseYear: number;
}
