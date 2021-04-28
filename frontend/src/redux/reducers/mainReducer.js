//importamos el metodo combine reducer
import { combineReducers } from 'redux';

//aca van importados los diferentes reducers de nuestra app
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import userReducer from './userReducer';

//aca adentro van nuestros reducers ALIAS : NAME REDUCER
const mainReducer = combineReducers({
    cityReducer,
    itineraryReducer,
    userReducer
})

export default mainReducer;