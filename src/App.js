import React, { Component } from 'react';

import { Route, IndexRoute } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import PokemonSelector from './components/pokemonSelector';
import store from './store';

class App extends Component {
  render() {
    // <Switch>
        // <Route exact path="/" component={Photogrid}/>
        // <Route path="/view/:postId" component={Single}/>
        // <Route component={NotFound}/>
      // </Switch>
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div>
              <Route path="/" component={PokemonSelector}/>
            </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
