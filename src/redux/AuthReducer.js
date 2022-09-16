const SET_USER = 'SET_USER';
const DEL_USER = 'DEL_USER';

let initialState = {
    email: null,
    token: null,
    id: null
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case SET_USER: {
            console.log(action.email);
            return {
                ...state,
                email: action.email,
                token: action.token,
                id: action.id
            }
        }
        case DEL_USER: {
            return {
                ...state,
                email: null,
                token: null,
                id: null
            }
        }
        default:
            return state;
    }
}
export const setUserActionCreator = (email, token, id) => {
    console.log(email);
    return {
        type: 'SET_USER',
        email,
        token,
        id
    }
}
export const delUserActionCreator = (email, token, id) => {
    return {
        type: 'DEL_USER',
        email,
        token,
        id
    }
}
export default AuthReducer;