const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
      {id: 1, photoUrl: 'https://promosila.by/images/testimonials/desigener-woman.png', followed: true, fullName: 'Dmitriy', status: 'I`m a boss', location: {country: 'Russia', city: 'Moscow'}},
      {id: 2, photoUrl: 'https://promosila.by/images/testimonials/desigener-woman.png', followed: false, fullName: 'Andrey', status: 'I need BMW', location: {country: 'Russia', city: 'Lubertcy'}},
      {id: 3, photoUrl: 'https://promosila.by/images/testimonials/desigener-woman.png', followed: true, fullName: 'Alina', status: 'I need going to China', location: {country: 'Russia', city: 'Moscow'}},
  ]
}

const UsersReducer = (state = initialState, action) => {

    switch(action.type){
      case FOLLOW:
        return {
          ...state, 
          users: state.users.map(u => {
            if(u.id === action.userId){
              return {...u, followed: true}
            }
            return u
          })
        }
      case UNFOLLOW:
        return {
          ...state, 
          users: state.users.map(u => {
            if(u.id === action.userId){
              return {...u, followed: false}
            }
            return u
          })
        }
      case SET_USERS: 
        return {...state, users: [...state.users, ...action.users]}
      default: 
        return state
    }
}

export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}
  
export const unfollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export default UsersReducer