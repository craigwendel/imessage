import React from 'react'
import '../styles/header.scss'

const Header = ( {user} ) => {
    const { name, status } = user
    return (
        <div className="header">
            <h2 className="header-name">{name}</h2>
            <p className="header-status">{status}</p>
        </div>
    )
}

export default Header