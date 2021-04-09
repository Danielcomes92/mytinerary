import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Cities from './pages/Cities';
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/cities" component={Cities} />
        <Redirect to = "/" />
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
