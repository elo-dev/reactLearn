const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialState = {
  posts: [
      {id: 1, message: 'Hi, how are you', like: 5},
      {id: 2, message: 'It`s my first post', like: 10},
      {id: 3, message: 'What it`s happen', like: 15}
  ],
  newPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default: 
            return state
    }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
export const onPostChangeActionCreator = (text) => {
    return {
      type: CHANGE_NEW_POST_TEXT,
      newText: text
    }
  }

export default profileReducer