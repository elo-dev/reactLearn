import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../components/common/objectHelper/objectHelper"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowing: []
}

const UsersReducer = (state = initialState, action) => {

    switch(action.type){
      case FOLLOW:
        return {
          ...state, 
          users: updateObjectInArray(state.users, 'id', action.userId, {followed: true})
        }
      case UNFOLLOW:
        return {
          ...state, 
          users: updateObjectInArray(state.users, 'id', action.userId, {followed: false})
        }
      case SET_USERS: 
        return {...state, users: action.users}
      case SET_CURRENT_PAGE: 
        return {...state, currentPage: action.currentPage}
      case SET_TOTAL_USERS_COUNT: 
        return {...state, totalUsersCount: action.count}
      case TOGGLE_IS_FETCHING: 
        return {...state, isFetching: action.isFetching}
      case TOGGLE_FOLLOWING_IN_PROGRESS:
        return{
          ...state,
          isFollowing: action.isFollowing
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter(id => id != action.userId)
        }
      default: 
        return state
    }
}

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}
  
export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const setTotalUsersCount = (totalUsers) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsers
  }
}

export const toggleIsFetching = (isFetching) => {
  return{
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export const toggleIsFollowing = (isFollowing, userId) => {
  return{
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFollowing,
    userId
  }
}

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  
  let data = await usersAPI.getUser(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (userId, dispatch, apiMethod,actionCreator) => {
  dispatch(toggleIsFollowing(true, userId))
  let data = await apiMethod(userId)
    if(data.resultCode === 0){
        dispatch(actionCreator(userId))
    }
  dispatch(toggleIsFollowing(false, userId))
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(userId, dispatch, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(userId, dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

export default UsersReducer