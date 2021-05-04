//importamos el metodo combine reducer
import { combineReducers } from 'redux';

//aca van importados los diferentes reducers de nuestra app
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import authReducer from './authReducer';
import activityReducer from './activityReducer';

//aca adentro van nuestros reducers ALIAS : NAME REDUCER
const mainReducer = combineReducers({
    cityReducer,
    itineraryReducer,
    authReducer,
    activityReducer
})

export default mainReducer;