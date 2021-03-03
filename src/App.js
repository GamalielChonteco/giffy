import { Link, Route } from 'wouter';

import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResult from './pages/SearchResults';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';

import './App.css';

const App = () => {
  return (
    <StaticContext.Provider value={{name: 'Gama', loading: true}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" src="./logo-old.png" alt="Giffy logo" />
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
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
      </div>
    </StaticContext.Provider>
  );
}

export default App;
