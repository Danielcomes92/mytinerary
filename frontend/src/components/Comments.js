import React, { useState } from 'react'
import { connect } from 'react-redux'

import itinerariesActions from '../redux/actions/itinerariesActions'
import Comment from './Comment'

const Comments = (props) => {
    const {userComments} = props
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
                setMessage({message: ''})
            } else {
                alert('The message is empty')
            }
        } else {
            alert('You must be logged in to comment')
        }
    }
    
    return (
        <>
            <div className="commentsContainer bg-white mt-5 w-full md:w-3/4 mx-auto">
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
            
            <div className="text-center">
                <input type="text" className="mx-auto bg-gray-200 rounded-full text-black h-8 px-2 mt-2 w-2/4"
                    value={message.message}
                    onChange={handleMessage}
                ></input>
                <span onClick={sendCommentObj} className="ml-2 text-white font-bold cursor-pointer">Send!</span>
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