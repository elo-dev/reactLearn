import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sideBarReducer from './sideBarReducer'

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._renderTree(this._state)
    }
}

export default store