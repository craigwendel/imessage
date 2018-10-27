import React from 'react'
import '../styles/App.scss'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import { connect } from 'react-redux'
import _ from 'lodash'

const App = ( {contacts} ) => {
    return (
        <div className="App">
            <Sidebar contacts={_.values(contacts)} />
            <Main />
        </div>
    );
}

const mapStateToProps = (state) => ({
    contacts: state
})

export default connect(mapStateToProps, null)(App)
