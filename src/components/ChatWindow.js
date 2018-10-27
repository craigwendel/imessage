import React from 'react'

const ChatWindow = ( {activeUserId} ) => {
    return (
        <div className="chat-window">
            <h2>Conversation for user id: {activeUserId} </h2>
        </div>
    )
}

export default ChatWindow