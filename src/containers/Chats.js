import React, { Component } from 'react'
import '../styles/chats.scss'

const Chat = ( {message} ) => {
    const { text, is_user_msg } = message
    return (
        <span className={`chat ${is_user_msg ? "user-msg" : ""}`}>{text}</span>
    )
}

class Chats extends Component {

    constructor(props) {
        super(props)
        this.chatsRef = React.createRef()
    }
    componentDidMount() {
        this.scrollToBottom()
    }
    componentDidUpdate() {
        this.scrollToBottom()
    }
    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight
    }

    render() {
        return (
            <div className="chats" ref={this.chatsRef}>
                {this.props.messages.map(message => 
                    <Chat message={message} key={message.number} />
                )}
            </div>
        )
    }
}



export default Chats