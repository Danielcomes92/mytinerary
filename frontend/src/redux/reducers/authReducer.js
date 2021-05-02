const initialState = {
    userLogged: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ACCESS_USER':
            localStorage.setItem('userLogged', JSON.stringify({firstName: action.payload.firstName, urlPic: action.payload.urlPic}))
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                userLogged: action.payload
            }
        case 'LOGOUT_USER':
        localStorage.clear()
            return {
                userLogged: null
            }

        default:
            return state
    }
}

export default authReducer;