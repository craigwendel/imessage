import React, { Component } from 'react'
import '../styles/chats.scss'

const Chat = ( {message} ) => {
    const { text, is_user_msg } = message
    return (
        <span className={`chat ${is_user_msg ? "user-msg" : ""}`}>{text}</span>
    )
}

class Chats extends Component {
    render() {
        return (
            <div className="chats">
                {this.props.messages.map(message => 
                    <Chat message={message} key={message.number} />
                )}
            </div>
        )
    }
}



export default Chats