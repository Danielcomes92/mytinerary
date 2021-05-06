import React, { useState } from 'react'
import { connect } from 'react-redux'

import itinerariesActions from '../redux/actions/itinerariesActions'

const Comment = (props) => {
    const token = props.userLogged.token;
    const {_id, userId, user, userImg, message} = props.comment
    const [updateMessage, setUpdateMessage] = useState(false)

    const [newMessage, setNewMessage] = useState(message)

    const handleNewMessage = async (e) => {
        setNewMessage(e.target.value)
        if(message.length > 0) {
            const response = await props.updateComment(_id, token, newMessage)
            console.log(response)
        }
    }
    
    const removeComment = async () => {
        if(props.userLogged) {
            const response = await props.removeComment(_id, token)
            if(response.data.success) {
                props.setComments(response.data.response)
            } else {
                alert(response.data.error)
            }

        }
    }
    
    return (
        <div className="block bg-gray-200">
            <div className="m-2">
                <div className="flex pt-1">
                    <div className="h-6 w-6 rounded-full" style={{backgroundImage: `url(${userImg})`}}></div>
                    <span className="ml-2 block font-semibold lato text-sm">{user} says:</span>
                </div>
                {
                    !updateMessage
                    ?
                    <span className="ml-8 text-sm">{message}</span>
                    :
                    <input type="text" onChange={handleNewMessage} value={newMessage.message} className="ml-8 text-sm w-1/4 bg-gray-200 border-b border-black"></input>
                }
                
                {
                    !updateMessage
                    ?
                    <div className="h-5 text-sm ml-8">
                        {/* editar comentario */}
                        <span onClick={() => setUpdateMessage(!updateMessage)} className="mr-1 cursor-pointer">Editar</span>
                        {/* borrar comentario */}
                        <span onClick={removeComment} className="cursor-pointer">Borrar</span>
                    </div>
                    :
                    <div className="h-5 text-sm ml-8">
                        {/* confirmar edicion */}
                        <span className="mr-1 cursor-pointer">Enviar</span>
                        {/* cancelar edicion */}
                        <span onClick={() => setUpdateMessage(!updateMessage)} className="cursor-pointer">Cerrar</span>
                    </div>
                }
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