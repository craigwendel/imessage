import React from 'react'
import '../styles/App.scss'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import { connect } from 'react-redux'
import _ from 'lodash'

const App = ( {contacts, user, activeUserId} ) => {
    return (
        <div className="App">
            <Sidebar contacts={_.values(contacts)} />
            <Main user={user} activeUserId={activeUserId}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    contacts: state.contacts,
    user: state.user,
    activeUserId: state.activeUserId
})

export default connect(mapStateToProps, null)(App)
