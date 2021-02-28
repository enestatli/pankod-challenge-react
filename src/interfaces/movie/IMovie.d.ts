export interface IMovie {
  title: string;
  description: string;
  programType: string;
  images: {
    posterArt: string;
    url: string;
    width: number;
    height: number;
  };
}
