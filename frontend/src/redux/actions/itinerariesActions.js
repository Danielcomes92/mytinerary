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
    },

    removeItineraries: () => {
        return(dispatch, getState) => {
            dispatch({
                type: 'REMOVE_ITINERARIES'
            })
        }
    },

    handleComments: (comment) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post(`http://localhost:4000/api/enterComment/${comment.itinerary_id}`, {comment: comment.message}, {
                    headers: {
                        'Authorization': 'Bearer '+ comment.token
                    }
                })

                return response
            } catch(err) {
                return err
            }
        }
    }
    
}

export default itinerariesActions;