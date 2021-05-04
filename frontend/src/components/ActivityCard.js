import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import activitiesActions from '../redux/actions/activitiesActions'
import { Activity } from './Activity';

const ActivityCard = (props) => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        getActivities()
    }, [])

    // console.log(activities)

    const getActivities = async () => {
        const response = await props.getItineraryActivities(props.id)
        setActivities(response)
    }

    return (
        <>
            <div className=" grid grid-cols-1 md:grid-cols-3">
                {
                    activities.map(activity => {
                        return <Activity key={activity._id} activity={activity} />
                    }) 
                }
            </div>
        </>
    )
}

const mapDispatchToProps = {
    getItineraryActivities: activitiesActions.getItineraryActivities
}

export default connect(null, mapDispatchToProps)(ActivityCard);