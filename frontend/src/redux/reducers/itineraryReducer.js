const initialState = {
    cityItineraries: [],
    loading: true,
    noCity: true
}

const itineraryReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_CITY_ITINERARIES':
            return {
                cityItineraries: action.payload,
                loading: false,
                noCity: action.payload.length === 0 ? true : false
            }

        case 'REMOVE_ITINERARIES':
            return {
                ...state,
                cityItineraries: [],
                loading: false
            }

        default:
            return state
    }
}

export default itineraryReducer;