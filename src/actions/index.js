import { SET_ACTIVE_USER_ID, SEND_MESSAGE, SET_TYPING_VALUE } from '../actions/constants/action-types'

export const setActiveUserId = (id) => ({
    type: SET_ACTIVE_USER_ID,
    id
})

export const setTypingValue = (value) => ({
    type: SET_TYPING_VALUE,
    value
})

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
    
})