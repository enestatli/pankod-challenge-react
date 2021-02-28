import { createContext } from 'react';

export const DataContext = createContext({
  data: [],
});

// const DataProvider = ({ children }: any) => {
//   return <MoviesContext.Provider>{children}</MoviesContext.Provider>;
// };
