import { Link, Route } from 'wouter';
import ListOfGifs from './components/ListOfGifs';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/dr house'>Gifs de Dr House</Link>
        <Link to='/gif/malcolm in the middle'>Gifs de Malcolm in the middle</Link>
        <Link to='/gif/los simpsons'>Gifs de Los simpsons</Link>

        <Route
          path='/gif/:keyword'
          component={ListOfGifs}
        />
      </section>
    </div>
  );
}

export default App;
