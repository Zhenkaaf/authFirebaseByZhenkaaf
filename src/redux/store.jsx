import { combineReducers, legacy_createStore as createStore } from "redux";
import AuthReducer from "./AuthReducer";

let reducers = combineReducers({
    auth: AuthReducer
})


const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // для того, чтобы расширение работало
    );
export default store;