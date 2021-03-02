//TODO: do not forget "lint": "eslint --fix src/**/*.{js,jsx,ts,tsx}"
import { Route, Switch } from 'react-router-dom';

import './styles/global.css';

import MainLayout from './layouts/MainLayout';
import { Error, Home, Movies, Series } from './pages';
import { MediaProvider } from './providers/media/provider';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <MainLayout>
              <Home />
            </MainLayout>
          )}
        />

        <Route
          path="/movies/:id"
          render={() => (
            <MediaProvider>
              <MainLayout>
                <Movies />
              </MainLayout>
            </MediaProvider>
          )}
        />

        <Route
          path="/series/:id"
          render={() => (
            <MediaProvider>
              <MainLayout>
                <Series />
              </MainLayout>
            </MediaProvider>
          )}
        />

        <Route
          render={() => (
            <MainLayout>
              <Error />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
