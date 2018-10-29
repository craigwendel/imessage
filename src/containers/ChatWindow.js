import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Chats from './Chats'
import MessageInput from './MessageInput'
import '../styles/chat-window.scss'
import _ from 'lodash'

const ChatWindow = ( {activeUserId, contacts, messages, typing} ) => {
    const activeUser = contacts[activeUserId]
    const activeMessages = messages[activeUserId]
    return (
        <div className="chat-window">
            <Header user={activeUser}/>
            <Chats messages={_.values(activeMessages)} />
            <MessageInput value={typing} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    activeUserId: state.activeUserId, 
    contacts: state.contacts,
    messages: state.messages,
    typing: state.typing
})

export default connect(mapStateToProps, null)(ChatWindow)