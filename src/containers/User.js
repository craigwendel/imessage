import React from 'react'
import '../styles/user.scss'

const User = ({user}) => {
    const { name, profile_pic, status } = user
    return (
        <div className="user">
            <img src={profile_pic} alt={name} className="user-image" />
            <div className="user-details">
                <p className="user-details-name">{name}</p>
                <p className="user-details-status">{status}</p>
            </div>
        </div>
    )
}

export default User