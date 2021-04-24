const initialState = {
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
            break
        
        case 'FILTER_CITIES':
            let findCity = action.payload.trim().toUpperCase()
            if(findCity) {
                var citiesFiltered = state.cities.filter(city => (city.city).toUpperCase().includes(findCity) && Array.from(city.city)[0].toUpperCase() === findCity[0]);
            }
            if(!citiesFiltered) {
                return {
                    ...state,
                    citiesUpdated: state.cities
                }
                             
            } else {

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
            }
            break

        default:
            return state

    }
}


export default cityReducer;