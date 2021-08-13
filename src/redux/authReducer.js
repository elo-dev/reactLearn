import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERRORS = 'SET_ERRORS'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  errors: []
}

const authReducer = (state = initialState, action) => {

    switch(action.type){
      case SET_USER_DATA:
        return {
          ...state,
          ...action.payload
        }
      case SET_ERRORS:
        return{
          ...state,
          errors: [...state.errors, action.error]
        }
      default: 
        return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
  }
}

export const authUser = () => async (dispatch) => {
  let response = await authAPI.me()
    if(response.data.resultCode === 0){
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const setErrors = (error) => {
  return{
    type: SET_ERRORS,
    error
  }
}

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)
      if(response.data.resultCode === 0){
        dispatch(authUser())
      } else {
        let msgError = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(setErrors(msgError))
      }
}

export const logOutUser = () => async (dispatch) => {
  let data = await authAPI.logOut()
      if(data.resultCode === 0){
        dispatch(authUser(null, null, null, false))
      }
}

export default authReducer