import { SET_ACTIVE_USER_ID } from '../actions/constants/action-types'

export default (state = null, action) => {
    switch (action.type) {
        case SET_ACTIVE_USER_ID: {
            console.log('firing userid')
            return action.id
        }
        default: return state
    }

}