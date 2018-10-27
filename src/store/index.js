import { createStore, compose, combineReducers } from 'redux'
import contacts from '../reducers/contacts'
import user from '../reducers/user'
import activeUserId from '../reducers/activeUserId'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        contacts,
        user,
        activeUserId
    }), composeEnhancers()
)

export default store