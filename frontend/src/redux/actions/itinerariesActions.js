import axios from 'axios';

const itinerariesActions = {

    getCityItineraries: (cityId) => {
        return(dispatch, getState) => {
            axios.get(`http://localhost:4000/api/itineraries/${cityId}`)
            .then(resp => dispatch({
                type: 'GET_CITY_ITINERARIES',
                payload: resp.data.response
            }))
            .catch((err) => ({
                success: false,
                err
            }))
        }
    }

}

export default itinerariesActions;