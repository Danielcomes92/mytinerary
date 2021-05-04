import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import activitiesActions from '../redux/actions/activitiesActions'
import ActivityCard from './ActivityCard';

const Itinerary = (props) => {
    const {authorName, authorPic, duration, hashtags, likes, price, title} = props.city;

    const [collapse, setCollapse] = useState(true)

    const handleActivities = () => {
        setCollapse(!collapse)
    }

    const getCountIcons = (variable) => {
        let aux = [];
        for(let i=0; i < variable; i++) {
            aux.push(i)
        }
        return aux;
    }

    return (
        <>
            <div className="w-11/12 md:w-8/12 mx-auto bg-gray-100 rounded-xl mt-12 md:mt-16 mb-10 md:mb-10 rounded-md shadow-md hover:shadow-lg">          
                <div className="w-full rounded-md flex flex-col bg-gray-700">

                    {/* div principal interno parte fija */}
                    <div className="mh30 px-2 mt-2"> 
                        
                        <div className="flex flex-col justify-center text-center mx-auto">
                            <div className="mx-auto">
                                <div className="bgCenter bgCover shadow-md rounded-full mt-2 w-32 h-32  md:h-32 md:w-32" style={{
                                    backgroundImage: `url(${authorPic})`
                                }}>
                                </div>
                                <span className="italic text-orange-100 text-xl lato">{authorName}</span>
                            </div>
                            
                            <div className="flex flex-row justify-center mt-2">
                                <div className="flex flex-col">
                                    <span className="lato text-white text-xl md:text-3xl font-bold">{title}</span>
                                </div>

                                <div className="ml-4">
                                    <div className="flex flex-row items-center">
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-red-600 cursor-pointer animated infinite pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        </div>
                                        <span className="text-red-200 lato text-sm md:text-base">{likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center text-lg text-blue-300">
                            {
                                hashtags.map( (hashtag, index) => {
                                    return <span key={index} className="mx-1">{hashtag}</span>
                                })
                            }
                        </div>

                        <div className="flex flex-col md:flex-row md:justify-center mx-6 mt-6 md:mt-8">
                            <div className="text-white lato flex flex-row">
                                <span className="text-lg mr-2">Price:</span>  { getCountIcons(price).map( (element, index) => {
                                    return <span className="text-green-400" key={index}>
                                                <span className="material-icons">monetization_on</span>
                                            </span>
                                }) }
                            </div>

                            <div className="mt-2 md:mt-0 md:mx-4 text-white lato flex flex-row">
                            <span className="text-lg mr-2 ">Duration:</span>
                                {
                                    getCountIcons(duration).map( (element, index) => {
                                    return  <span className="text-blue-300" key={index}>
                                                <span className="material-icons items-center">timer</span>
                                            </span>
                                    })
                                }
                            </div>
                        </div>
                    
                    </div>
                    {/* fin div principal parte fija */}
                            
                    {   
                    !collapse &&
                        <>
                        {/* contenedor de activities y comments */}
                            <div className="px-2 mx-auto mt-4 mb-4 w-8/12">

                                {/* contenedor activities */}
                                
                                <ActivityCard id={props.city._id}/>
                                
                                {/* fin activities */}

                                {/* contenedor comments */}
                                <div className="px-2 mx-auto mt-4 mb-4 bg-gray-400">
                                    <span className="lobster text-2xl md:text-4xl"> Comments is under construction </span>
                                </div>
                                {/* fin comments */}
                                
                            </div>
                            {/* fin contenedor act y comments */}
                        </>
                    }         

                    <div className="mx-auto mb-4 mt-4">
                        <span onClick={(e) => handleActivities()} className="shadow-md text-center hover:shadow-xl text-white py-2 px-5 md:px-9 bg-blue-500 duration-500 transition md:hover:bg-white md:hover:text-blue-900 cursor-pointer lato rounded">{collapse ? 'View more' : 'View less'}</span>
                    </div>

                    {/* card footer */}
                    <div className="w-full h-10 rounded-bl-md bg-gray-800 rounded-b-md shadow-md bg-gray-900"></div>
                </div>
            </div>
        </>
    )
}

// const mapStateToProps = state => {
//     return {
//         itineraryActivities: state.activityReducer.itineraryActivities,
//         loading: state.activityReducer.loading
//     }
// }

const mapDispatchToProps = {
    getItineraryActivities: activitiesActions.getItineraryActivities,
    updateLoadingState: activitiesActions.updateLoadingState
}

export default connect(null, mapDispatchToProps)(Itinerary);

