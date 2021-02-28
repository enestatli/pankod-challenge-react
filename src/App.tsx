//TODO: do not forget "lint": "eslint --fix src/**/*.{js,jsx,ts,tsx}"
import { Route, Switch } from 'react-router-dom';

import './default.css';

import MainLayout from './layouts/MainLayout';
import { Error, Home, Movies, Series } from './pages';

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
          path="/movies"
          render={() => (
            <MainLayout>
              <Movies />
            </MainLayout>
          )}
        />
        <Route
          path="/series"
          render={() => (
            <MainLayout>
              <Series />
            </MainLayout>
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
