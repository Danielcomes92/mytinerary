import React, { useState } from 'react'

export const Comment = ({comment}) => {
    const {_id, userId, user, userImg, message} = comment
    const [updateMessage, setUpdateMessage] = useState(false)

    const removeComment = (e) => {
        console.log(e.target.dataset.id)
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
                        <input type="text" placeholder={message}  className="ml-8 text-sm w-1/4 bg-gray-200 border-b border-black"></input>
                    }
                    
                    {
                        !updateMessage
                        ?
                        <div className="h-5 text-sm ml-8">    
                            {/* editar comentario */}
                            <span onClick={() => setUpdateMessage(!updateMessage)} className="mr-1 cursor-pointer">Editar</span>
                            {/* borrar comentario */}
                            <span onClick={removeComment} data-id={_id} className="cursor-pointer">Borrar</span>
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
