import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import City from './pages/City'
import Cities from './pages/Cities';
import Home from './pages/Home'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { connect } from 'react-redux';
import authActions from './redux/actions/authActions';

function App(props) {

  //si la prop userlogged no tiene nada, y en localstorage existe el item token ingresa aca
  if(!props.userLogged && localStorage.getItem('token')) {

    //guardamos los datos que tenemos en la propiedad userLogged de localstorage
    const dataUserLogged = JSON.parse(localStorage.getItem('userLogged'))

    //unificamos nuevamente el objeto, con los datos del usuario tokenizados y los datos que teniamos separados
    const userLS = {
      token: localStorage.getItem('token'),
      ...dataUserLogged
    }
    props.loginWithLS(userLS)
  }

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

const mapStateToProps = state => {
  return {
      userLogged: state.authReducer.userLogged
  }
}

const mapDispatchToProps = {
    loginWithLS: authActions.loginWithLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)