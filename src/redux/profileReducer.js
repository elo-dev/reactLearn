import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
      {id: 1, message: 'Hi, how are you', like: 5},
      {id: 2, message: 'It`s my first post', like: 10},
      {id: 3, message: 'What it`s happen', like: 15}
  ],
  newPostText: 'it-kamasutra',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: 
          let newPost = {
              id: 5,
              message: action.postBody,
              like: 0
          }
          return {
            ...state,
            posts: [...state.posts, newPost]
          }
        case SET_USER_PROFILE:
          return{...state, profile: action.profile}
        case SET_STATUS:
          return{...state, status: action.status}
        default: 
            return state
    }
}

export const addPostActionCreator = (postBody) => {
    return {
      type: ADD_POST,
      postBody
    }
}

export const setUserProfile = (profile) => {
  return{
    type: SET_USER_PROFILE,
    profile
  }
}

export const setStatus = (status) => {
  return{
    type: SET_STATUS,
    status
  }
}

export const getUserProfile = (userId) => {
    return (dispatch) =>{
        if(!userId){
          userId = 18589
        }
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId) => {
  return (dispatch) =>{
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data))
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) =>{
    profileAPI.updateStatus(status).then(response => {
      if(response.data.resultCode === 0){
        dispatch(setStatus(status))
      }
    })
  }
}

export default profileReducer