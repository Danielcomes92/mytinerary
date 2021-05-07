import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import activitiesActions from '../../redux/actions/activitiesActions'
import itinerariesActions from '../../redux/actions/itinerariesActions';
import ActivityCard from './ActivityCard';
import Comments from './Comments';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure()

const Itinerary = (props) => {
    let token;
    if(props.userLogged) {
        token = props.userLogged.token;
    }

    const {_id, authorName, authorPic, duration, hashtags, likes, price, title, comments} = props.city;
    
    const [collapse, setCollapse] = useState(true)
    const [liked, setLiked] = useState(false)
    const [processingLike, setProcessingLike] = useState(false)
    const [counterLikes, setCounterLikes] = useState(likes)
    const [userComments, setUserComments] = useState([])

    useEffect(() => {
        props.userLogged && renderUserLikesComments()
    }, [])

    const renderUserLikesComments = async () => {
        const response = await props.getUserLikesComments(_id, props.userLogged.token);
        setLiked(response.data.likedResponse);
        setUserComments(response.data.commentResponse);
    }

    const handleLike = async () => {
        if(props.userLogged) {
            if(!processingLike) {
                setProcessingLike(true)
                setLiked(!liked)
                const response =  await props.updateLikes(_id, token)
                setCounterLikes(response.data.response.likes)
                setProcessingLike(false)
            }
        } else {
            toast.error('You must be logged in to like an itinerary', {position: toast.POSITION.TOP_RIGHT})
        }
    }
 
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
            <section class="bg-white w-11/12 md:w-10/12 mx-auto rounded-md shadow-md text-gray-600 body-font overflow-hidden mt-10 mb-10">
                <div class="container px-5 py-6 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="itinerary image" class="lg:w-1/2 w-full lg:h-auto h-48 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <div className="flex flex-row justify-between items-center mt-2 mb-2 md:mt-0 md:mb-0">
                                <div className="flex flex-row items-center">
                                    <div className="bgCenter bgCover shadow-md rounded-full w-10 h-10" style={{
                                        backgroundImage: `url(${authorPic})`
                                    }}>
                                    </div>
                                    <h2 class="ml-2 title-font text-sm md:text-base text-gray-600 tracking-widest">{authorName}</h2>
                                </div>
                                <div className="flex flex-row items-center">
                                    <button onClick={handleLike} class="rounded-full focus:outline-none w-10 h-10 bg-gray-200 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill={liked ? "red" : "gray"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                    <span className="ml-1 text-red-600 lato text-xs md:text-base">{counterLikes}</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <h1 class="text-gray-900  md:font-medium text-2xl md:text-3xl mb-1">{title}</h1>    
                            </div>
                            <div class="flex mb-4">
                            <span class="flex items-center">
                                <span class="text-gray-600 text-sm md:text-base ml-3">{comments.length} Reviews</span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <span class="text-gray-500 cursor-pointer">
                                <svg fill="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                                </span>
                                <span class="text-gray-500 cursor-pointer">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                                </span>
                                <span class="text-gray-500 cursor-pointer">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                                </span>
                            </span>
                            </div>
                            <div className="flex flex-col md:flex-row mb-8 mt-8">
                                <div className="flex flex-row">
                                    <span className="mr-1">Price:</span>  { getCountIcons(price).map( (element, index) => {
                                        return <span className="text-green-500 flex items-center" key={index}>
                                                    <span className="material-icons">monetization_on</span>
                                                </span>
                                    }) }
                                </div>

                                <div className="flex flex-col md:flex-row mt-2 md:mt-0 md:ml-4">
                                    <div className="flex flex-row items-center">
                                        <span className="mr-1">Duration: </span>
                                        <span className="text-blue-500 text-black material-icons">timer</span>
                                        <span>{duration}h</span>
                                    </div>
                                </div>
                            </div>
                            <p class="leading-relaxed text-sm md:text-base">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>

                            <div className="md:text-lg text-blue-400">
                            {
                                hashtags.map( (hashtag, index) => {
                                    return <span key={index} className="mr-1">{hashtag}</span>
                                })
                            }
                            </div>
                        </div>
                    </div>                               
                    {   
                        <>
                            <div className={collapse ? 'hidden' : 'block'}>
                            {/* contenedor de activities y comments */}
                                <div className="mx-auto mt-10 mb-4 md:w-8/12">

                                    {/* contenedor activities */}
                                    <ActivityCard id={props.city._id}/>
                                    {/* fin activities */}

                                    {/* contenedor comments */}
                                    <Comments comments={comments} userComments={userComments} renderUserLikesComments={renderUserLikesComments} setUserComments={setUserComments} id={props.city._id}/>
                                    {/* fin comments */}
                                    
                                </div>
                            {/* fin contenedor act y comments */}
                            </div>
                        </>
                    }
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-400 mb-5"></div>
                    <div className="flex justify-center md:justify-end w-10/12 mx-auto">
                        <button onClick={(e) => handleActivities()} class="text-white bg-indigo-500 text-sm md:text-base border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">{collapse ? 'View more' : 'View less'}</button>                        
                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    getItineraryActivities: activitiesActions.getItineraryActivities,
    updateLoadingState: activitiesActions.updateLoadingState,
    updateLikes: itinerariesActions.updateLikes,
    getUserLikesComments: itinerariesActions.getUserLikesComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
