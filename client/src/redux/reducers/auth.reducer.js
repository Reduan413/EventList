import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT
} from '../actionType'

const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem("token"),
    isLoading: false,
    user: null,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: null
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                user: null
            }
        case AUTH_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                isLoading: false,
                user: null
            }
        case LOGIN_FAILED:
            return {
                isAuthenticated: false,
                token: null,
                isLoading: false,
                user: "Invalid Credential"
            }
        case LOGOUT:
            localStorage.removeItem("token")
            return {
                isAuthenticated: false,
                token: null,
                isLoading: false,
                user: null
            }
        default:
            return state.token ? {
                ...state,
                isAuthenticated: true
            } : state
    }
}