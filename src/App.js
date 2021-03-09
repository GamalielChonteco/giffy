import React, { Suspense } from 'react'
import { Link, Route } from 'wouter';

import Detail from './pages/Detail';
import SearchResult from './pages/SearchResults';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
import './App.css';

const HomePage = React.lazy(() => import('./pages/Home'))


const App = () => {
  return (
    <StaticContext.Provider value={{name: 'Gama', loading: true}}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <figure className="App-logo">
                <img src="/logo.png" alt="Giffy logo"/>
              </figure>
            </Link>
            <GifsContextProvider>
              <Route
                component={HomePage}
                path='/'
              />
              <Route
                component={SearchResult}
                path='/search/:keyword'
              />
              <Route
                component={Detail}
                path='/gif/:id'
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
