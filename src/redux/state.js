const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', like: 5},
                {id: 2, message: 'It`s my first post', like: 10},
                {id: 3, message: 'What it`s happen', like: 15}
            ],
            newPostText: 'it-kamasutra'
        },
          
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Alina'}
            ],
    
            messages : [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'HI'},
                {id: 3, message: 'What'}
            ],
            newMessageText: 'Hello'
        },
    
        sideBar:{
            friends: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Alina'}
            ]
        }
    },
    _renderTree(){
        console.log('State was changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer) {
        this._renderTree = observer
    },

    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._renderTree(this._state)
        } else if(action.type === 'CHANGE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._renderTree(this._state)
        } else if(action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._renderTree(this._state)
        } else if(action.type === 'CHANGE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.newMessage
            this._renderTree(this._state)
        }
    }
}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newMessage: text
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

export default store