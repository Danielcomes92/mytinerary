import React, { useState } from 'react'

export const Itinerary = ({city}) => {
    const {authorName, authorPic} = city;
    const [collapse, setCollapse] = useState(true)

    console.log(city)
    return (
        <>
            <div className="w-11/12 md:w-9/12 mx-auto flex flex-col bg-gray-100 rounded-xl mt-12 md:mt-16 mb-10 md:mb-10 rounded-md shadow-md hover:shadow-lg">          
                <div className="w-full rounded-md">
                    <div className="mh30 bg-gray-700 px-4">
                        
                        <div className="bgCenter bgCover h-32 w-32" style={{
                            backgroundImage: `url(${authorPic})`
                        }}>
                        </div>

                        <p>{authorName}</p>
                    </div>
                    {/* <div className="mh40 bg-gray-500 px-4">
                        <p className="text-orange-100 text-lg text-center font-semibold lobster text-5xl md:text-6xl">parte collapsed</p>
                    </div> */}
                    
                    {/* card footer */}
                    <div className="w-full h-10 rounded-bl-md bg-gray-800 rounded-b-md shadow-md bg-gray-900"></div>
                </div>
            </div>
        </>
    )
}
