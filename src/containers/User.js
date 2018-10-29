import React from 'react'
import '../styles/user.scss'
import { setActiveUserId } from '../actions'
import store from '../store'

const User = ({user}) => {
    const { name, profile_pic, status } = user
    return (
        <div className="user" onClick={() => handleUserClick(user)}>
            <img src={profile_pic} alt={name} className="user-image" />
            <div className="user-details">
                <p className="user-details-name">{name}</p>
                <p className="user-details-status">{status}</p>
            </div>
        </div>
    )
}

const handleUserClick = ({user_id}) => {
    store.dispatch(setActiveUserId(user_id))
}

export default User