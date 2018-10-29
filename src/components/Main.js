import React from 'react'
import '../styles/main.scss'
import Empty from './Empty'
import ChatWindow from '../containers/ChatWindow'

const Main = ( {user, activeUserId} ) => {
    const renderMainContent = () => (
        (activeUserId !== null) ? 
            <ChatWindow activeUserId={activeUserId} /> : 
            <Empty user={user} activeUserId={activeUserId} />
    )
    return (
        <div className="main">
            {renderMainContent()}
        </div>
    )
}

export default Main