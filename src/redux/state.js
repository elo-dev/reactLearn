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

    getState(){
        return this._state
    },

    _renderTree(){
        console.log('State was changed')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._renderTree(this._state)
    },

    changeNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._renderTree(this._state)
    },

    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._renderTree(this._state)
    },

    changeNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage
        this._renderTree(this._state)
    },

    subscribe(observer) {
        this._renderTree = observer
    }
}

export default store