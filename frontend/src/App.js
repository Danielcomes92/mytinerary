import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import City from './pages/City'
import Cities from './pages/Cities';
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/city/:id" component={City} />
        <Redirect to = "/" />
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
