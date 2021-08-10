import { loginAPI } from "../api/api"

const SET_USER_LOGIN = 'SET_USER_LOGIN'

let initialState = {
    email: null,
    password: null,
    rememberMe: null
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_LOGIN:
            return{...state, ...action.data}
        default:
            return state
    }
}

export const setLoginData = (email, password, rememberMe) => {
    return{
        type: SET_USER_LOGIN,
        data: {email, password, rememberMe}
    }
}

export const loginUser = () => {
    return (dispatch) =>{
        loginAPI.setLogin().then(data => {
            if(data.resultCode === 0){
                let {email, password, rememberMe} = data.data
                dispatch(setLoginData(email, password, rememberMe))
            }
        })
    }
}

export default loginReducer