import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import itinerariesActions from '../../redux/actions/itinerariesActions'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ModalPopUp from '../utilities/ModalPopUp';
toast.configure()

const Comment = (props) => {
    const {userComments} = props
    let token;
    if(props.userLogged) {
        token = props.userLogged.token;
    }
    const {_id, user, userImg, message} = props.comment
    const [updateMessage, setUpdateMessage] = useState(false)
    const [newMessage, setNewMessage] = useState(message)
    const [isOwner, setIsOwner] = useState(false)
    const [showModal, setShowModal] = useState(false);

    useEffect( () => {
        userComments.length > 0 && setIsOwner(userComments)
    }, [])

    let validateOwnerComment = userComments.some(id => id === _id)

    const handleNewMessage = (e) => {
        setNewMessage(e.target.value)
    }

    const sendNewMessage = async () => {
        if(props.userLogged) {
            if(message.length > 0) {
                const response = await props.updateComment(_id, token, newMessage)
                if(response.data.success) {
                    props.setComments(response.data.response)
                } else {
                    toast.error(response.data.error, {position: toast.POSITION.TOP_RIGHT})
                }
                setUpdateMessage(!updateMessage)
            } else {
                toast.error('The message is empty', {position: toast.POSITION.TOP_RIGHT})
            }
        } else {
            toast.error('You must be logged in to update a message', {position: toast.POSITION.TOP_RIGHT})
        }
    }
    
    const removeComment = async () => {
        if(props.userLogged) {
            const response = await props.removeComment(_id, token)
            if(response.data.success) {
                toast.success('Message removed', {position: toast.POSITION.TOP_RIGHT})
                props.setComments(response.data.response)
            } else {
                toast.error(response.data.error, {position: toast.POSITION.TOP_RIGHT})
            }
        } else {
            toast.error('You must be logged in to remove a message', {position: toast.POSITION.TOP_RIGHT})
        }
    }


    
    return (
        <div className={validateOwnerComment ? "bg-indigo-100 md:mr-4 block border shadow-md rounded mt-2 mb-2 md:w-11/12 mx-auto" : "md:ml-4 bg-white block border shadow-md rounded mt-2 mb-2 md:w-11/12 mx-auto"}>
            {
                showModal && <ModalPopUp removeComment={removeComment} setShowModal={setShowModal}/>
            }
            <div className="my-2 flex flex-col">

                <div className="flex flex-row justify-between">
                    <div className="w-12 p-1">
                        <div className="h-8 w-8 rounded-full bgCenter bgCover" style={{backgroundImage: `url(${userImg})`}}></div>
                    </div>
                    <div className="p-1 items-center w-full flex justify-between">
                        <span className="mt-1 text-gray-800 block font-semibold lato text-sm">{user}:</span>
                        <div>                        
                        {
                            validateOwnerComment &&
                                <>
                                {   
                                    !updateMessage
                                    ?
                                    <div className="h-8 text-sm ml-2 mr-2 flex flex-row items-center">
                                        {/* editar comentario */}
                                        <span onClick={() => setUpdateMessage(!updateMessage)} className="mr-1 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </span>
                                        {/* borrar comentario */}
                                        <span onClick={() => setShowModal(true)} className="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </span>
                                    </div>
                                    :
                                    <div className="h-8 text-sm ml-8  mr-2 flex flex-row items-center">
                                        {/* confirmar edicion */}
                                        <span onClick={sendNewMessage} className="mr-1 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {/* cancelar edicion */}
                                        <span onClick={() => setUpdateMessage(!updateMessage)} className="cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                }
                                </>
                            }
                        </div>
                    </div>
                </div> 
                <div className="mx-auto w-9/12 ">
                    {
                    !updateMessage
                    ?
                    <div className="text-sm text-gray-900 mx-auto -mt-1">{message}</div>
                    :
                    <textarea onChange={handleNewMessage} value={newMessage} className="w-full text-sm resize-none focus:outline-none bg-indigo-100 h-auto" />
                    }
                </div>     
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    removeComment: itinerariesActions.removeComment,
    updateComment: itinerariesActions.updateComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);