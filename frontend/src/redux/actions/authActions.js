import axios from "axios";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure()

const authActions = {
    newUser: (newUser) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('https://webapp-mytinerary.herokuapp.com/api/signup', newUser)

                if(response.data.validatorErrors) {   
                    return response.data.validatorErrors //joi validator
                } else if(!response.data.success) {
                    toast.error(response.data.error, {position: toast.POSITION.TOP_RIGHT})
                } else {
                    dispatch({
                        type: 'ACCESS_USER',
                        payload: response.data.response
                    })
                    toast.success("You've been registered!", {position: toast.POSITION.TOP_RIGHT})
                }
            } catch {
                toast.error("Internal database error, try in a moment", {position: toast.POSITION.TOP_RIGHT})
            }
        }
    },

    logUser: (logUser) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('https://webapp-mytinerary.herokuapp.com/api/login', logUser)
               
                if(response.data.success) {
                    dispatch({
                        type: 'ACCESS_USER',
                        payload: response.data.response
                    })                
                } else {
                    //aca va a venir el error de pass o mail incorrect // o database error
                    toast.error(response.data.error, {position: toast.POSITION.TOP_RIGHT})
                }
            } catch {
                toast.error("Internal database error, try in a moment", {position: toast.POSITION.TOP_RIGHT})
            }
        }
    },

    logOut: () => {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOGOUT_USER'
            })
        }
    },

    loginWithLS: (userLS) => {
        return async(dispatch, getState) => {
            try {
                const response = await axios.get('https://webapp-mytinerary.herokuapp.com/api/loginLS', {
                    headers: {
                        'Authorization': 'Bearer '+ userLS.token
                    }
                })
                dispatch({
                    type: 'ACCESS_USER',
                    payload: {
                        ...response.data.response,
                        token: userLS.token
                    }
                })
            } catch {
                toast.error("Internal database error, try in a moment", {position: toast.POSITION.TOP_RIGHT})
            }
        }
    }
}

export default authActions;