import React from 'react';
import PokemonList from './routes/pokemonList';
import PokemonSingle from './routes/pokemonSingle';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokeman api</h1>
      </header>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <PokemonList />
            </Route>

            <Route exact path="/pokemon/:pokemonName">
              <PokemonSingle />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;