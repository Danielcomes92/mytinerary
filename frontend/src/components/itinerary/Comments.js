import React, { useState } from 'react'
import { connect } from 'react-redux'

import itinerariesActions from '../../redux/actions/itinerariesActions'
import Comment from './Comment'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure()

const Comments = (props) => {
    const {userComments, renderUserLikesComments} = props
    const [message, setMessage] = useState({
        message: ''
    })

    const [comments, setComments] = useState(props.comments)

    const handleMessage = (e) => {
        setMessage({
            message: e.target.value
        })
    }
    
    const sendCommentObj = async (e) => {
        e.preventDefault();
        let commentObj;
        let response;

        if(props.userLogged) {
            if(message.message.length > 0) {
                commentObj = {
                    message: message.message,
                    itinerary_id: props.id,
                    token: props.userLogged.token
                }
                response = await props.handleComments(commentObj)
                setComments(response.data.response.comments)
                renderUserLikesComments()
                setMessage({message: ''})
            } else {
                toast.error('The message is empty', {position: toast.POSITION.TOP_RIGHT})
            }
        } else {
            toast.error('You must be logged in to comment', {position: toast.POSITION.TOP_RIGHT})
        }
    }
    
    return (
        <>
             <div className="md:w-10/12 mx-auto text-2xl md:text-3xl text-gray-900 md:mb-4">
               Comments
            </div>
            <div className="md:w-10/12 mx-auto bg-indigo-500 commentsContainer flex justify-between flex-col bg-white shadow-md rounded-md">
                <div className="chatContainer mt-5 mb-2 w-full mx-auto" style={{
                    backgroundImage: "url('../img/pattern.png')"
                }}>
                {
                    comments.length > 0
                    ?
                    comments.map(comment => {
                        return <Comment key={comment._id} setComments={setComments} userComments={userComments} setMessage={setMessage} comment={comment} />
                    })
                    :
                    <div className="bg-black w-full h-12 items-center flex justify-center bg-opacity-75 text-white">This chat is empty, be the first!</div>
                }
                </div>
                <div className="mt-6 mb-4 w-8/12 mx-auto text-white text-light flex">
                    <form className="w-full" onSubmit={sendCommentObj}>
                        <input id="inputItinerary" type="text" placeholder={props.userLogged ? "Share you experience here!" :  "You must be logged in to comment"} className="bg-indigo-500 text-light focus:outline-none border-b border-gray-500 w-full placeholder-white ml-2 text-gray-100 h-8 px-2 mt-2 "
                            value={message.message}
                            onChange={handleMessage}
                        ></input>
                    </form>
                    <div onClick={sendCommentObj} className={props.userLogged && message.message.length > 0 ? "cursor-pointer focus:outline-none" : "text-gray-400 cursor-not-allowed  focus:outline-none"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-4 h-6 w-6 transform rotate-90 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={props.userLogged && message.message.length > 0 ? 2 : 1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </div>
                </div>
            </div>
            
        </>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    handleComments: itinerariesActions.handleComments,
    getCityItineraries: itinerariesActions.getCityItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);