import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT_SUCCESS
} from '../actions/types'

const initialState = {
    isAuthenticated: null,
    user: {},
}

// eslint-disable-next-line
export default function(state=initialState, action) {
    const { type, payload } = action

    switch(type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: payload,
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            }
        case REGISTER_FAIL:
        case AUTHENTICATED_FAIL:
        case LOGOUT_SUCCESS:
        case LOGIN_FAIL:
            return initialState
        default:
            return state
    }
}