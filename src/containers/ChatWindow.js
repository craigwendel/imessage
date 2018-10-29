import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Chats from './Chats'
import '../styles/chat-window.scss'
import _ from 'lodash'

const ChatWindow = ( {activeUserId, contacts, messages} ) => {
    const activeUser = contacts[activeUserId]
    const activeMessages = messages[activeUserId]
    return (
        <div className="chat-window">
            <Header user={activeUser}/>
            <Chats messages={_.values(activeMessages)} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    activeUserId: state.activeUserId, 
    contacts: state.contacts,
    messages: state.messages
})

export default connect(mapStateToProps, null)(ChatWindow)