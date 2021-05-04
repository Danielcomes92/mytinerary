import React from 'react'

export const Activity = (props) => {
    console.log(props.activity._id)
    return (
        
            <div className="w-11/12 mx-auto md:w-full bgCenter bgCover flex cardActivities justify-center" style={{
                backgroundImage: `url(/img/activities/${props.activity.activityPic})`
            }}>
                <span className="bg-black h-8 w-full text-center bg-opacity-75 text-white">{props.activity.title}</span>
            </div>
        
    )
}
