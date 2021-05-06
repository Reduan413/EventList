import axios from 'axios'
import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
} from '../actionType'

export function loadUser() {
    return function(dispatch, getState) {
        dispatch({ type: USER_LOADING})

        const token = getState().authReducer.token
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }

        axios
            .get("/api/users/", config)
            .then((res) => {
				dispatch({
                    type: USER_LOADED,
                    payload: res.data.data
				})
			})
			.catch((err) => {
				console.log(err);
				dispatch({ type: AUTH_ERROR })
			})
    }
}


export const handleLogin = user => dispatch => {
    axios
        .post("/user/login/", user)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token: res.data.access_token,
                    isAuthenticated: true,
                }
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: LOGIN_FAILED,
            })
        })
}