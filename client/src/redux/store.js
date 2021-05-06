import { combineReducers, applyMiddleware, createStore } from "redux"
import authReducer from "../redux/reducers/auth.reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    authReducer
})
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))

)

export default store