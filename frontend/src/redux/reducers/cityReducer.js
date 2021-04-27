const initialState = {
    city: '',
    cities: [],
    citiesUpdated: [],
    noCitiesAlert: false,
    loading: true
}

const cityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CITIES':
            return {
                ...state,
                cities: action.payload,
                citiesUpdated: action.payload,
                loading: false
            }
        
        case 'FILTER_CITIES':
            let valueInput = action.payload.trim().toUpperCase()
            if(valueInput) {
                var citiesFiltered = state.cities.filter(city => (city.city).toUpperCase().includes(valueInput) && Array.from(city.city)[0].toUpperCase() === valueInput[0]);
            }
            if(citiesFiltered) {
                if(citiesFiltered.length > 0) {
                    return {
                        ...state,
                        citiesUpdated: citiesFiltered,
                        noCitiesAlert: false
                    }
                } else {
                    return {
                        ...state,
                        noCitiesAlert: true
                    }
                }
            } else {
                return {
                    ...state,
                    citiesUpdated: state.cities
                }  
            }

        default:
            return state

    }
}


export default cityReducer;