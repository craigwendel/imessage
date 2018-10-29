import React from 'react'
import { setTypingValue, sendMessage } from '../actions'
import store from '../store'
import '../styles/message-input.scss'

const MessageInput = ( {value} ) => {

    const state = store.getState();  

    const handleSubmit = (e) => {
        e.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(sendMessage(typing, activeUserId));
    }

    const handleChange = (e) => {
        store.dispatch(setTypingValue(e.target.value))
    }

    return (
        <form className="message" onSubmit={handleSubmit}>
            <input
                className="message-input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    )
}


export default MessageInput;