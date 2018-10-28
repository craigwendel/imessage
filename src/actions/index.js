import { SET_ACTIVE_USER_ID } from '../actions/constants/action-types'

export const setActiveUserId = (id) => ({
    type: SET_ACTIVE_USER_ID,
    id
})