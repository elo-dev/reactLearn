let renderTree = () => {
    console.log('State was changed')
}

let state = {
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
}

// ПОСТЫ

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderTree(state)
}

export const changeNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderTree(state)
}

// СООБЩЕНИЯ

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    renderTree(state)
}

export const changeNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage
    renderTree(state)
}


export const subscribe = (observer) => {
    renderTree = observer
}

export default state