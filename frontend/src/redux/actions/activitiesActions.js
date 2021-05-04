import axios from 'axios';

const activitiesActions = {
    getItineraryActivities: (ItineraryId) => {
        return async (dispatch, getState) => {
           const response = await axios.get(`http://localhost:4000/api/activities/${ItineraryId}`)           
            return response.data.response
        }
    }   
}

export default activitiesActions;
