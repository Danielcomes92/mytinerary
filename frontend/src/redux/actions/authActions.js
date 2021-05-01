import axios from "axios";


const authActions = {

    newUser: (newUser) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/signup', newUser)
                if(!response.data.success) {
                    console.log(response.data.errors)
                    return response.data.errors
                }
                dispatch({
                    type: 'ACCESS_USER',
                    payload: response.data.success ? response.data.response : null
                })                
            } catch (error) {
                alert(error)
            }
        }
    },

    logUser: (logUser) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/login', logUser)
               
                if(response.data.success) {
                    dispatch({
                        type: 'ACCESS_USER',
                        payload: response.data.response
                    })                
                } else {
                    console.log(response.data)
                }

            } catch (error) {
                console.log(error)
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
                console.log(userLS)
                const response = await axios.get('http://localhost:4000/api/loginLS', {
                    headers: {
                        'Authorization': 'Bearer '+ userLS.token
                    }
                })
                console.log(response)
                dispatch({
                    type: 'ACCESS_USER',
                    payload: {
                        ...response.data.response,
                        token: userLS.token
                    }
                })
            } catch (error) {
                console.log(error)         
            }
        }
    }
}

export default authActions;