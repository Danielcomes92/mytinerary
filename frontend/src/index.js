import React from 'react';
import ReactDOM from "react-dom";
import App from './App';

// con esta libreria disponemos de los metodos de redux
import { applyMiddleware, createStore } from 'redux';

// esta libreria es la que une a redux con nuestro proyecto
import { Provider } from 'react-redux';

// el middleware thunk nos brinda la posibilidad de trabajar con acciones asincronas
import thunk from 'redux-thunk';
import mainReducer from "./redux/reducers/mainReducer";

import "../src/css/tailwind.min.css";
import "../src/css/flickity.css";
import "../src/css/styles.css";

const myStore = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
document.getElementById('root')
);