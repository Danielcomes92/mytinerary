import React from 'react'

export const Activity = (props) => {
    // console.log(props.activity._id)
    return (
        
            <div className="w-full md:w-11/12 mt-1 md:mt-0 mx-auto bgCenter bgCover flex cardActivities shadow" style={{
                backgroundImage: `url(/img/activities/${props.activity.activityPic})`
            }}>
                <span className="bg-black h-8 w-full text-center bg-opacity-75 text-white">{props.activity.title}</span>
            </div>
        
    )
}
