import axios from 'axios';

//en este action van los fetcheos, etc
const citiesActions = {

    getCities: () => {
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/cities')
            .then(resp => dispatch({
                type: 'GET_CITIES',
                payload: resp.data.response
            }))
            .catch((err) => ({
                success: false,
                err
            }))
        }
    },

    filterCities: (inputValue) => {
        return(dispatch, getState) => {
            dispatch({
                type: 'FILTER_CITIES',
                payload: inputValue
            })
        }
    }

}

export default citiesActions;