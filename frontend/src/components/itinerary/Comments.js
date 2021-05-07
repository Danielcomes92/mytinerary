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
            <div className="flex items-center mt-4">
                <h1 class="text-gray-900 md:font-medium text-lg font-bold md:text-2xl mb-1">Tell another travellers your experience here</h1>    
            </div>
            <div className="bg-indigo-500 commentsContainer flex justify-between flex-col bg-white shadow-md rounded-md">
                <div className="chatContainer mt-5 mb-2 w-full mx-auto" style={{
                    backgroundImage: "url('/img/pattern.png')"
                }}>
                {
                    comments.length > 0
                    ?
                    comments.map(comment => {
                        return <Comment key={comment._id} setComments={setComments} userComments={userComments} setMessage={setMessage} comment={comment} />
                    })
                    :
                    <div className="text-center">This chat is empty</div>
                }
                </div>
                <div className="text-center mt-6 mb-4 w-full md:w-3/5 mx-auto text-white flex">
                    <form className="w-full" onSubmit={sendCommentObj}>
                        <input id="inputItinerary" type="text" placeholder={props.userLogged ? "Share you experience here!" :  "You must be logged in to comment"} className="bg-indigo-500 focus:outline-none border-b border-gray-500 w-full placeholder-white mx-auto text-gray-100 h-8 px-2 mt-2 "
                            value={message.message}
                            onChange={handleMessage}
                        ></input>
                    </form>
                    <button type="submit" onClick={sendCommentObj} className={props.userLogged && message.message.length > 0 ? "ml-1 text-gray-100 font-bold cursor-pointer w-1/6" : "ml-2 text-gray-100 cursor-not-allowed w-1/6"}>Send</button>
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