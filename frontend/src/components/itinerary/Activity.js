import React from 'react'

export const Activity = (props) => {
    // console.log(props.activity._id)
    return (
            <>  <div className="flex flex-col mb-4 md:mb-0">
                    <div className="w-full mx-auto md:mx-1 mt-1 md:mt-0 bgCenter bgCover flex cardActivities shadow-md" style={{
                        backgroundImage: `url(/img/activities/${props.activity.activityPic})`
                    }}>
                    </div>
                    <span className="h-auto w-full text-center lobster text-lg text-black">{props.activity.title}</span>
                </div>
            </>
    )
}
