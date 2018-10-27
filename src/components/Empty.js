import React from 'react'
import '../styles/empty.scss'

const Empty = ( {user} ) => {
    console.log(user)
    const { name, status, profile_pic } = user
    const firstName = name.split(" ")[0]
    return (
        <div className="empty">
            <h1 className="empty-name">Welcome, {firstName}</h1>
            <img className="empty-pic" src={profile_pic} alt={name} />
            <p className="empty-status">
                <b>Status:</b> {status}
            </p>
            <button className="empty-btn">Start a Conversation</button>
            <p className="empty-info">
                Search for someone to start chatting with or go to Contacts to see who is available
            </p>
        </div>
    )
}

export default Empty