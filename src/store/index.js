import { createStore, compose, combineReducers } from 'redux'
import contacts from '../reducers/contacts'
import user from '../reducers/user'
import activeUserId from '../reducers/activeUserId'
import messages from '../reducers/messages'
import typing from '../reducers/typing'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        contacts,
        user,
        messages,
        typing,
        activeUserId
    }), composeEnhancers()
)

export default store