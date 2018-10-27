import { createStore, compose } from 'redux'
import contacts from '../reducers/contacts'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(contacts, composeEnhancers())

export default store