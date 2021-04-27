import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import City from './pages/City'
import Cities from './pages/Cities';
import Home from './pages/Home'
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/city/:id" component={City} />
        <Redirect to = "/" />
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
